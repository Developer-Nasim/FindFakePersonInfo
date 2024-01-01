
import Class from "./style.module.css"
import LiA from '../Singlecomponents/LiA'
import TranslateText from "../../helpers/TranslateText"
export default function Footer() {
    return(
        <footer> 
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className={Class.copywrite}>{TranslateText('footer.copyright')}</p>
                    </div>
                    <div className="col-md-9 text-end">
                        <ul className={Class.flinks}>
                            <LiA to="/privacy-policy">{TranslateText('footer.privacy')}</LiA>
                            <LiA to="/terms-of-services">{TranslateText('footer.tos')}</LiA>
                            <LiA to="/contactus">{TranslateText('header.contact')}</LiA> 
                        </ul> 
                    </div>
                </div>
            </div>
        </footer>
    )
}