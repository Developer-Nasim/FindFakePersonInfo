import ContentCart from "../ContentCart";
import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Sectiontm from "../Singlecomponents/Sectiontm";
import TranslateText from '../../helpers/TranslateText'

export default function Hero() {
    return (
        <Sectiontm className="hero-section">
            <div className="row">
                <div className="col-lg-12">
                    <ContentCart BgImg={BgImg}>
                        <h1>{TranslateText('home.hero.heading')}</h1>
                        <p className="mb-5">{TranslateText('home.hero.content')}</p>
                        <Button href={'/join'}>{TranslateText('home.hero.button')}</Button>
                    </ContentCart>
                </div>
            </div>
        </Sectiontm> 
    )
}