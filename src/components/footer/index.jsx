
import Class from "./style.module.css"
import LiA from '../Singlecomponents/LiA' 
import { useTranslation } from "react-i18next";
export default function Footer() {
    const {t} = useTranslation()
    return(
        <footer> 
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className={Class.copywrite}>{t('footer.copyright')}</p>
                    </div>
                    <div className="col-md-9 text-end">
                        <ul className={Class.flinks}>
                            <LiA to="/privacy-policy">{t('footer.privacy')}</LiA>
                            <LiA to="/terms-of-services">{t('footer.tos')}</LiA>
                            <LiA to="/contactus">{t('header.contact')}</LiA> 
                        </ul> 
                    </div>
                </div>
            </div>
        </footer>
    )
}