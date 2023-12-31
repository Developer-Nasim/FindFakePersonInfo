import Button from "../Button/Button";
import BgImg from '../../assets/img/fakebanner.png'
import Sectiontm from "../Singlecomponents/Sectiontm";
import Class from './style.module.css'



export default function AboutSection() {
    return (
        <Sectiontm className="about-section">
            <div className="row">
                <div className="col-lg-12">
                    <div className={Class['about-contents']}>
                        <img src={BgImg} alt="" />
                        <div>
                            <h3>Get there information</h3>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                            <p>
                                <span><b>Developed by:</b></span>
                                <div>
                                    <a href="#">Amiruzzaman Nasim</a>
                                    <span><b>E-Mail</b>: ajnasim72@gmail.com</span>
                                    <span><b>Call</b>: +8801405618060</span>
                                </div>
                            </p>
                            <Button redTheme href={"login"}>Start for Free</Button>
                        </div>
                    </div>
                </div>
            </div>
        </Sectiontm> 
    )
}