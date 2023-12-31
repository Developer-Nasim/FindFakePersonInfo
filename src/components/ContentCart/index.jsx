import Class from './style.module.css'
export default function ContentCart({BgImg,classes,children}) {
    return(
        <div className={`${Class.ContentCart} ${classes}`}>
            {BgImg && <img src={BgImg} alt="" />} 
            <div className={Class.ccWrp}>
                {children}
            </div>
        </div>
    )
}