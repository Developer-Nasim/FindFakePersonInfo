import style from './style.module.css'
import {getDatabase, ref, get} from 'firebase/database' 
import Avatar from '../../../assets/img/no-product-image.png' 
import { useLocation ,NavLink} from 'react-router-dom' 
import { useEffect, useState } from 'react' 
import { useAuth } from "../../../Contexts/AuthContext";
import TimeFormate from '../../../helpers/TimeFormate'
import Button from '../../Button/Button'
import LMap from './LMap'
import { useTranslation } from "react-i18next";

export default function LinkDetailsContents() {
  const [details,setDetails] = useState()
  const [statuses,setStatuses] = useState({
    loading:true,
    error: false
  })
  const {curentUser} = useAuth() 
  const {search} = useLocation() 
  const ExtractKey = search.replace("?",'')
  const {t} = useTranslation()

  useEffect(() => { 
    async function GetLinkDetails() {
        try {
          const db = await getDatabase()
          const dbRefs = await ref(db, `infos/${curentUser.uid}/${ExtractKey}`)
          const snap = await get(dbRefs);
          setDetails(snap.val())
          setStatuses((prev)=>({...prev,loading:false}))
        } catch (error) {
          setStatuses((prev)=>({...prev,error:false}))
        }
    } 
    GetLinkDetails()
  },[]) 
 


    return (
        <div className={style.linkDetails}> 

          {!statuses.loading && !statuses.error ? 
            ( <>  
              <h4>
                <NavLink to="/dashboard">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 0.5C9.23094 0.5 0.5 9.23094 0.5 20C0.5 30.7691 9.23094 39.5 20 39.5C30.7691 39.5 39.5 30.7691 39.5 20C39.5 9.23094 30.7691 0.5 20 0.5ZM23.3103 27.9397C23.4555 28.0776 23.5715 28.2432 23.6517 28.4266C23.7319 28.6101 23.7745 28.8078 23.777 29.0079C23.7796 29.2081 23.7421 29.4068 23.6666 29.5923C23.5912 29.7778 23.4794 29.9462 23.3378 30.0878C23.1962 30.2294 23.0278 30.3412 22.8423 30.4166C22.6568 30.4921 22.4581 30.5296 22.2579 30.527C22.0578 30.5245 21.8601 30.4819 21.6766 30.4017C21.4932 30.3215 21.3276 30.2055 21.1897 30.0603L12.1897 21.0603C11.9086 20.779 11.7507 20.3977 11.7507 20C11.7507 19.6023 11.9086 19.221 12.1897 18.9397L21.1897 9.93969C21.4733 9.67026 21.8509 9.52227 22.2421 9.52728C22.6332 9.53229 23.0069 9.68989 23.2835 9.9665C23.5601 10.2431 23.7177 10.6168 23.7227 11.008C23.7277 11.3991 23.5797 11.7767 23.3103 12.0603L15.3716 20L23.3103 27.9397Z" fill="black"/>
                  </svg>
                </NavLink>
                <span className="d-block text-truncate">{details.url}</span> 
              </h4>
              <div className={style.targetedPersonPhoto}> 
                <img src={details.img ? details.img : Avatar} alt="Img can't load" />
                <h5 className='text-break'>{details.url}</h5>
                <span>last clicked {details.clicked_at ? TimeFormate(details.clicked_at) : "Some times ago"}</span>
              </div>  
              <ul> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.isp')}</b>
                  <span className="d-block text-break">{details.as} (details.isp)</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.country')}</b>
                  <span className="d-block text-break">{details.country}</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.devision')}</b>
                  <span className="d-block text-break">{details.regionName}</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.city')}</b>
                  <span className="d-block text-break">{details.city}</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.location')}</b>
                  <span className="d-block text-break"><NavLink target='_blank' to={`https://www.google.com/maps/@${details.lat},${details.lon}`}>Click See Loction</NavLink></span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.device')}</b>
                  <span className="d-block text-break">{details.mobile ? 'Mobile' : 'laptop/desktop'}</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.browser')}</b>
                  <span className="d-block text-break">{details.brand}</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.operating_system')}</b>
                  <span className="d-block text-break">{details.platform}</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.ip')}</b>
                  <span className="d-block text-break">{details.query}</span>
                </li> 
                <li>
                  <b className="d-block text-truncate">{t('link_details.timezone')}</b>
                  <span className="d-block text-break">{details.timezone}</span>
                </li> 
              </ul>
              <div className={style.target_location}> 
                <LMap lat={details.lat} lon={details.lon}/> 
              </div>
              
            </> )
          : "" }
          {statuses.loading && ( <h3 className='mt-5 mb-5 text-center'>Loading..</h3> )}
          {statuses.error && ( 
            <div className={style.wrongInDetails}>
              <h4>Something wents wrong!</h4>
              <Button href="/dashboard">Go Back</Button>
            </div>
           )}
        </div>
    )
    
}