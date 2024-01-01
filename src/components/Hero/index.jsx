import ContentCart from "../ContentCart";
import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Sectiontm from "../Singlecomponents/Sectiontm"; 
import { useTranslation } from "react-i18next";

export default function Hero() {
    const {t} = useTranslation()
    return (
        <Sectiontm className="hero-section">
            <div className="row">
                <div className="col-lg-12">
                    <ContentCart BgImg={BgImg}>
                        <h1>{t('home.hero.heading')}</h1>
                        <p className="mb-5">{t('home.hero.content')}</p>
                        <Button href={'/join'}>{t('home.hero.button')}</Button>
                    </ContentCart>
                </div>
            </div>
        </Sectiontm> 
    )
}