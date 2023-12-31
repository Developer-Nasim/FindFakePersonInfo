import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Play from '../../assets/img/play.png'
import Sectiontm from "../Singlecomponents/Sectiontm";
import Class from './style.module.css'
import ContentCart from "../ContentCart";
import YouTube from "react-youtube";
import { useEffect, useState } from "react";



function Step({rightMode,idx,children}) {
    return( 
        <div className={rightMode ? `${Class.rightMode} ${Class.step}` : `${Class.step}`}>
            <span>{idx}</span>
            <div className={Class.stepWrp}>
                {children}
            </div>
        </div>
    )
}



export default function HowtoSection() {
    const [showVideo, setShowVideo] = useState(false)

    useEffect(() => {

        // hiding before jumping into another page
        return setShowVideo(false)
    },[])

    const showVideos = () => {
        setShowVideo(!showVideo)
    }

    return (
        <Sectiontm className={Class.howtoSection}>
            <div className="row">
                <div className="col-lg-12">
                    <div className={Class.how_to_wrps}>
                        
                        {showVideo ? (<YouTube videoId={"CvzPTeGv9Gw"} onEnd={showVideos} iframeClassName="iframe_100x500"/>) :( 
                            <ContentCart BgImg={BgImg} > 
                                <button className={Class.playBtn} onClick={showVideos} type="button"><img src={Play} alt="" /></button>
                            </ContentCart>
                        )}
                        <div className={Class.how_to_steps}>
                            <h1>How it is work?</h1>
                            <div className={Class.steps}>
                                <Step idx="01">Unknown person disturbing you in social media? are you worried about it, if and if</Step>
                                <Step idx="02" rightMode>Unknown person disturbing you in social media? are you worried about it, if and if</Step>
                                <Step idx="03">Unknown person disturbing you in social media? are you worried about it, if and if</Step>
                                <Step idx="04" rightMode>Unknown person disturbing you in social media? are you worried about it, if and if</Step>
                                <Step idx="05">Unknown person disturbing you in social media? are you worried about it, if and if</Step>
                            </div>
                        </div>
                        <Button href={"/dashboard"} redTheme>Get Started</Button>
                    </div>
                </div>
            </div>
        </Sectiontm> 
    )
}