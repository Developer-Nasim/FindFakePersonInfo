import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Sectiontm from "../Singlecomponents/Sectiontm";
import Class from './style.module.css'
import TranslateText from '../../helpers/TranslateText'



export default function AboutSection() {
    return (
        <Sectiontm className="about-section">
            <div className="row">
                <div className="col-lg-12">
                    <div className={Class['about-contents']}>
                        <img src={BgImg} alt="" />
                        <div>
                            <h3 className="text-center mb-3">{TranslateText('home.about.heading')}</h3>
                            <p>{TranslateText('home.about.content')}</p>
                            <p>
                                <span><b>{TranslateText('home.about.label')}:</b></span>
                                <div>
                                    <a href="https://www.linkedin.com/in/amiruzzaman-nasim/">{TranslateText('home.about.name')}</a>
                                    <span><b>E-Mail</b>: {TranslateText('home.about.email')}</span>
                                    <span><b>Call</b>: {TranslateText('home.about.call')}</span>
                                </div>
                            </p>
                            <Button redTheme href={"login"}>{TranslateText('home.about.button')}</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Sectiontm> 
    )
}