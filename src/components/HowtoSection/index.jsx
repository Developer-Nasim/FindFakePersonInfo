import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Play from '../../assets/img/play.png'
import Sectiontm from "../Singlecomponents/Sectiontm";
import Class from './style.module.css'
import ContentCart from "../ContentCart";
import YouTube from "react-youtube";
import { useEffect, useState } from "react"; 
import { useTranslation } from "react-i18next";



// Single step
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
    const {t} = useTranslation()

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
                            <h1>{t('home.howto.heading')}</h1>
                            <div className={Class.steps}>
                                <Step idx={t('home.howto.step.num')}>{t('home.howto.step.content')}</Step>
                                <Step idx={t('home.howto.step2.num')} rightMode>{t('home.howto.step2.content')}</Step>
                                <Step idx={t('home.howto.step3.num')}>{t('home.howto.step3.content')}</Step>
                                <Step idx={t('home.howto.step4.num')} rightMode>{t('home.howto.step4.content')}</Step>
                                <Step idx={t('home.howto.step5.num')}>{t('home.howto.step5.content')}</Step>
                                <Step idx={t('home.howto.step6.num')} rightMode>{t('home.howto.step6.content')}</Step>
                            </div>
                        </div>
                        <Button href={"/dashboard"} redTheme>{t('home.howto.button')}</Button>
                    </div>
                </div>
            </div>
        </Sectiontm> 
    )
}