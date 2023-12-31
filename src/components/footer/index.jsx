
import Class from "./style.module.css"
import LiA from '../Singlecomponents/LiA'
export default function Footer() {
    return(
        <footer> 
            <div className="container">
                <div className="row">
                    <div className="col-md-3">
                        <p className={Class.copywrite}>© All right reserved</p>
                    </div>
                    <div className="col-md-9 text-end">
                        <ul className={Class.flinks}>
                            <LiA to="/privacy-policy">Privacy Policy</LiA>
                            <LiA to="/terms-of-services">Terms of Service</LiA>
                            <LiA to="/contactus">Contact us</LiA> 
                        </ul> 
                    </div>
                </div>
            </div>
        </footer>
    )
}