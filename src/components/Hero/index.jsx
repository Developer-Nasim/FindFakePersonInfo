import ContentCart from "../ContentCart";
import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Sectiontm from "../Singlecomponents/Sectiontm";
export default function Hero() {
    return (
        <Sectiontm className="hero-section">
            <div className="row">
                <div className="col-lg-12">
                    <ContentCart BgImg={BgImg}>
                        <h1>Get there information</h1>
                        <p className="mb-5">Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                        <Button href={'/join'}>Find now</Button>
                    </ContentCart>
                </div>
            </div>
        </Sectiontm> 
    )
}