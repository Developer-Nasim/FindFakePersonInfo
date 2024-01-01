import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Sectiontm from "../Singlecomponents/Sectiontm";
import Class from './style.module.css'
import { useTranslation } from "react-i18next"; 



export default function AboutSection() {
    const {t} = useTranslation()
    return (
        <Sectiontm className="about-section">
            <div className="row">
                <div className="col-lg-12">
                    <div className={Class['about-contents']}>
                        <img src={BgImg} alt="" />
                        <div>
                            <h3 className="text-center mb-3">{t('home.about.heading')}</h3>
                            <p>{t('home.about.content')}</p>
                            <p>
                                <span><b>{t('home.about.label')}:</b></span>
                                <div>
                                    <a href="https://www.linkedin.com/in/amiruzzaman-nasim/">{t('home.about.name')}</a>
                                    <span><b>E-Mail</b>: {t('home.about.email')}</span>
                                    <span><b>Call</b>: {t('home.about.call')}</span>
                                </div>
                            </p>
                            <Button redTheme href={"login"}>{t('home.about.button')}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Sectiontm> 
    )
}