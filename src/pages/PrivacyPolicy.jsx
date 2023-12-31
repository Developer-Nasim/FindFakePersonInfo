 import { useEffect } from "react";
import OnlyTextContents from "../components/Singlecomponents/OnlyTextContents";
import Sectiontm from "../components/Singlecomponents/Sectiontm";
import HtmlTitle from "../helpers/HtmlTitle";

export default function PrivacyPolicy() {
    // Set page title
    useEffect(() => {
        HtmlTitle('Priivacy Policy')
    },[])
    return(
        <Sectiontm className="privacy-policy">
            <div className="row">
                <div className="col-lg-12">
                    <OnlyTextContents title="Privacy and Policy">
                        <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.
                        Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                        <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                        <p>Unknown person disturbing you in social media? are you worried about it, if and if you want to find them then is tool is for you, and it’s a perfect tool for you.</p>
                    </OnlyTextContents> 
                </div>
            </div>
        </Sectiontm>
    )
}