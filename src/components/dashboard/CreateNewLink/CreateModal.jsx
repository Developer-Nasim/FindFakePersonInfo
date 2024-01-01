import Input from '../../Singlecomponents/Input' 
import Button from '../../Button/Button'
import style from './style.module.css'
import { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import {getDatabase, ref, set,push} from 'firebase/database'
import {useAuth} from '../../../Contexts/AuthContext' 
import CopyToClipBoard from '../../../helpers/CopyToClipBoard' 
import { useTranslation } from "react-i18next";



export default function CreateModal({closeHandle}) {
    const [status,SetStatus] = useState(false)
    const [loading,setLoading] = useState(true)
    const [imgs,setImgs] = useState([])
    const [text,seTexts] = useState({title:'',search:'honey'})
    const [createdLink,setCreatedLink] = useState({})
    const [imgurl,seTimgurl] = useState('')
    const title = useRef(null)
    const {curentUser} = useAuth() 
    const {t} = useTranslation()

    


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
        .catch(err => console.error(err))  
 
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
                    'created_url': `/yours/?${newPostRef.key}#${uid}`
                } 

                await set(newPostRef,{
                    ...datas
                })  
                SetStatus(true)
                setCreatedLink(datas)
                target.classList.remove('disabled')
            } catch (error) {
                console.error(error)
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
                            <Button onClick={(e) => CopyToClipBoard(e,`${window.location.origin}${createdLink.created_url}`)}>{t('dashboard.create_link.copy')}</Button>
                        </div>
                    </div>
                    :  
                    <div className={style.create_link_area}> 
                        <h5>{t('dashboard.create_link.title')}</h5>
                        <Input placeholder="Write a title here..." ref={title} name="title" onChange={inputHandle}/>
                        <div className={style.interestingImgs}>
                            <h5>{t('dashboard.create_link.select_img')} <Input placeholder="Search..." name="search" onChange={inputHandle}/></h5>
                            <div className={style.all_imgs}> 
                                { !loading ?
                                    imgs.map((item,idx) => {
                                        return <img key={idx} className={imgurl === item.urls.small ? style.selected : ''} src={item.urls.small} alt="" onClick={selectImg} /> 
                                    })
                                    :
                                    <h4 className='text-center mt-3'>Loading....</h4>
                                } 
                            </div>
                            <Button type="submit">{t('dashboard.create_link.button')}</Button> 
                        </div>
                    </div>
                    }
                </form>
            </div>
        </div>
    )
}