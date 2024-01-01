import LiA from "../../Singlecomponents/LiA"; 
import style from './style.module.css'
import { useAuth } from "../../../Contexts/AuthContext";
import TranslateText from "../../../helpers/TranslateText";

export default function ProfileCart() {
    const {curentUser,logout} = useAuth()

    const LogOutNow = (e) => {
        e.preventDefault()
        logout()
    }

    return(
        <div className={style.profile_cart}>
            <img src={curentUser ? curentUser.photoURL : ''} alt="" />
            <h4 className="text-truncate">{curentUser ? curentUser.displayName : ''}</h4>
            <p>{curentUser ? curentUser.email : ''}</p>
            <ul>
                <LiA to="/dashboard">{TranslateText('header.dashboard')}</LiA>  
                <LiA to="/logout" onClick={LogOutNow}>{TranslateText('dashboard.logout')}</LiA>
            </ul>
        </div>
    )
}