import Input from '../../Singlecomponents/Input'
import Avatar from '../../../assets/img/fakebanner.png'
import Button from '../../Button/Button'
import style from './style.module.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {getDatabase, ref, set,push} from 'firebase/database'
import {useAuth} from '../../../Contexts/AuthContext'
import { useLocation } from 'react-router-dom'
import CopyToClipBoard from '../../../helpers/CopyToClipBoard'
import TimeAgo from 'javascript-time-ago'



export default function CreateModal({closeHandle}) {
    const [status,SetStatus] = useState(false)
    const [loading,setLoading] = useState(true)
    const [imgs,setImgs] = useState([])
    const [text,seTexts] = useState({title:'',search:'honey'})
    const [createdLink,setCreatedLink] = useState({})
    const [imgurl,seTimgurl] = useState('')
    const title = useRef(null)
    const {curentUser} = useAuth() 

    


    useEffect(() => { 
        axios.get('https://api.unsplash.com/search/photos', {
            params: {
              query: text.search,
              per_page: 12,
              client_id: 'wdXCKGxTiDzErsHJwjXMvx6mxrTOT2TtlIrE9vD7rn8',
            }
        })
        .then((res) => { 
            setImgs(res.data.results)
            setLoading(false)
        })
        .catch(err => console.log(err))  
 
    },[text.search])
 
    const inputHandle = (e) => {
        seTexts({
            ...text,
            [e.target.name]:e.target.value
        })
    }

    const selectImg = (e) => {
        const target = e.target
        seTimgurl(target.src) 
        target.classList.add('selected')
    }

    const createLink = async (e) => {
        e.preventDefault()

        const target = e.target
        target.classList.add('disabled')

        if (0 >= text.title.length || 0 >= imgurl.length) {
            title.current.classList.add('empty') 
            target.classList.remove('disabled')
        }else{  
            try { 
                const {uid} = curentUser
                const db = getDatabase()
                const linkRefs = await ref(db, `links/${uid}`)
                const newPostRef = await push(linkRefs);
                const datas = {
                    "title":text.title,
                    'img':imgurl,
                    'created_at':  `${Date.now()}`,
                    'created_url': `/yours/?${newPostRef.key}`
                } 

                await set(newPostRef,{
                    ...datas
                })  
                SetStatus(true)
                setCreatedLink(datas)
                target.classList.remove('disabled')
            } catch (error) {
                console.log(error)
                target.classList.remove('disabled')
            }
        }
    }

 
    return(
        <div className={style.create_link_now}>
            <div className={style.lc_contents}>
                <span onClick={closeHandle}>Close</span>
                <form onSubmit={createLink}>
                    {status ? 
                    <div className={style.created_link_now_copy}>
                        <img src={createdLink.img} alt="" />
                        <div>
                            <h5>{createdLink.title}</h5>
                            <i className='text-break'>{window.location.origin+""+createdLink.created_url}</i>
                            <Button onClick={(e) => CopyToClipBoard(e,`${window.location.origin}${createdLink.created_url}`)}>Copy Link</Button>
                        </div>
                    </div>
                    :  
                    <div className={style.create_link_area}> 
                        <h5>Add a title</h5>
                        <Input placeholder="Write a title here..." ref={title} name="title" onChange={inputHandle}/>
                        <div className={style.interestingImgs}>
                            <h5>Select an image <Input placeholder="Search..." name="search" onChange={inputHandle}/></h5>
                            <div className={style.all_imgs}> 
                                { !loading ?
                                    imgs.map((item,idx) => {
                                        return <img key={idx} className={imgurl === item.urls.small ? style.selected : ''} src={item.urls.small} alt="" onClick={selectImg} /> 
                                    })
                                    :
                                    <h4 className='text-center mt-3'>Loading....</h4>
                                }
                                {/* <img src="https://imgs.search.brave.com/i7i3QSws0oTC4_md6iwyeyyPqykDzHuz91a0VmEZCF4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzdjL2Qy/L2Y4LzdjZDJmODVi/NmRkYzQxZDQwMTk0/NmQyY2JlMjM0MWYz/LmpwZw" alt="" />
                                <img className={style.big} src="https://imgs.search.brave.com/Qqh7DZo3e3POAdvfGMvWK38XrHM0VyjfGG50THjQXZ0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ4/MjE5OTY3NC9waG90/by9wb3J0cmFpdC1v/Zi1ibGFjay1mZW1h/bGUtbWFuYWdlci13/cml0aW5nLW9uLWds/YXNzLWJvYXJkLWFu/ZC1icmFpbnN0b3Jt/aW5nLXdpdGgtdGVh/bS1pbi1hLndlYnA_/Yj0xJnM9MTcwNjY3/YSZ3PTAmaz0yMCZj/PVFHUWFlV0VkR041/LUxCTFNKTU9qS2NY/M1l1OHB0Njhxc2Ux/Y3h2ZjlycGc9" alt="" />
                                <img src="https://imgs.search.brave.com/L8HHK02YlRXQ6oZeEAL7P0wwpLDhKhEuJg9-NafWRrY/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzFhL2Jh/LzY5LzFhYmE2OTlk/NTgzMTlkMjgxY2Ex/YzNmZjBiN2NmZjYw/LmpwZw" alt="" />
                                <img className={style.long} src="https://imgs.search.brave.com/y_pw6Nc1E766hO5u-TxJYsqWaQ6J6oWehi9A2vGvaA0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8x/Mi9pbnRlcmVzdGlu/Zy1yYXJlbHktc2Vl/bi10aGluZ3MtMTEz/LTVkZjI2NTBjMDY3/OTBfXzcwMC5qcGc" alt="" />
                                <img src="https://imgs.search.brave.com/Un65bTFxy6C0hbYRbEw1574mQN2PZz09FNoox8G9lfU/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAxOS8w/My9yYXJlbHktc2Vl/bi1pbWFnZXMtMTEt/NWM4Nzg4YzkwMTYw/ZV9fNzAwLmpwZw" alt="" />
                                <img src="https://imgs.search.brave.com/pfvnZmtY2YucqYNZOGh_BRuWBoBc_S4zbn65oridGuk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/MTg2NjI0NC9waG90/by9pbm5vdmF0aW9u/LXRocm91Z2gtaWRl/YXMtYW5kLWluc3Bp/cmF0aW9uLWlkZWFz/LWh1bWFuLWhhbmQt/aG9sZGluZy1saWdo/dC1idWxiLXRvLWls/bHVtaW5hdGUud2Vi/cD9iPTEmcz0xNzA2/NjdhJnc9MCZrPTIw/JmM9LVhocWlPTndE/bmt0azVCYUxaOVpB/VDY4WnowRWF0b1Vw/LVdHc1JoRk44dz0" alt="" />
                                <img className={style.big} src="https://imgs.search.brave.com/jqdP6YQa3OVxIQlpeynBjD-krZo3gg0YMNZxIvAA3Xo/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/MDA3ODEwNDg0MTkt/MTUwODNlMTRiNTFl/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TWpCOGZH/bHVkR1Z5WlhOMGFX/NW5mR1Z1ZkRCOGZE/QjhmSHd3" alt="" />
                                <img src="https://imgs.search.brave.com/4ZA8AeFkap5FFJzvAY0971ORy6ql21AD2ViaVJG77h8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/NjM4OTEyMTc4NjEt/NzkyNGI0NzFhZmIz/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRCOGZH/bHVkR1Z5WlhOMGFX/NW5mR1Z1ZkRCOGZE/QjhmSHd3" alt="" />
                                <img src="https://imgs.search.brave.com/Co6V9a-Lmc0Pw51PXVXCH2ZV8iAZUdwUUB6KxQqqn-g/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzljL2Rj/LzM5LzljZGMzOTU1/Y2Q0YTY3MWMxZjZh/YTU0ZTljNWE0MzBh/LmpwZw" alt="" />
                                <img src="https://imgs.search.brave.com/-ubwA6j-IXAw-aPpigoKMBVNG6StM-XE5LyzFFhXVHE/rs:fit:860:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy9i/L2I2L1BlbmNpbF9k/cmF3aW5nX29mX2Ff/Z2lybF9pbl9lY3N0/YXN5LmpwZw" alt="" />  */}
                            </div>
                            <Button type="submit">Done</Button>
                            {/* <Button onClick={() => SetStatus(true)}>Done</Button> */}
                        </div>
                    </div>
                    }
                </form>
            </div>
        </div>
    )
}