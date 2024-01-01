import { useEffect } from "react";
import Sectiontm from "../components/Singlecomponents/Sectiontm";
import AuthContents from "../components/AuthContents"; 
import HtmlTitle from "../helpers/HtmlTitle";

export default function Auth() { 
    // Set page title
    useEffect(() => {
        HtmlTitle('Login or Created account to get started')
    },[])
    return(
        <Sectiontm className="auth-section">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <AuthContents/>
                </div>
            </div>
        </Sectiontm>
    )
}