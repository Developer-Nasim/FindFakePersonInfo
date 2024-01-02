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

                    <p>This Privacy Policy was last updated on 02/01/2024.</p>

                    <h4>1. Introduction</h4>
                    <p>Thank you for using {window.location.origin}. This Privacy Policy is meant to help you understand what information we collect, why we collect it, and how you can manage and control your personal information.</p>
                    

                    <h4>2. Information We Collect</h4>

                    <p>
                        <b>a. Personal Information:</b> <br />
                        <span>name, email address, photo</span>
                    </p>

                    <p>
                        <b>b. Non-Personal Information:</b> <br />
                        <span>browser type, IP address, location,ip information </span>
                    </p>

                    <h4>3. How We Collect Information</h4>
                    <p>We collect information in the following ways: using registration form and browser api, Remember all the information will be collect with your permission </p>

                    <h4>4. Why We Collect Information</h4>
                    <p>We collect and use information for the following purposes: to provide services, improve user experience. this website/tool is dedicated to find fake persons information so we use your information to improve user experience and to provide best services </p>

                    <h4>5. How We Use and Share Information</h4>
                    <p>
                        <b>a. Internal Use:</b> <br />
                        <span>we do dont use information internally, the information we use for other users of this site. so your information is shared other and other information sharing with you.</span>
                    </p>
  

                    <h4>6. Your Choices</h4> 
  
                    <p>
                        <b>a. Access and Update:</b><br />
                        <span>You can not update your data but you can see your information after login in your dashboard</span>
                    </p>


                    <h4>7. Security Measures</h4>
                    <p>We take reasonable measures to protect your information from unauthorized access or disclosure.</p>

                    <h4>8. Changes to This Privacy Policy</h4>
                    <p>We may update this Privacy Policy from time to time. Please review it periodically for changes.</p>

                    
                    <h4>9. Contact Us</h4>
                    <p>If you have any questions or concerns about this Privacy Policy, please contact us at ajnasim72@gmail.com </p>


                    <b>NOTE:</b>
                    <p>At the end, now it is your Choices what you will do. if you somehow click on the shared link page or if you click anywhere of a page then this site will collect your information. so if you are not interested to share your information then do not click on this page {window.location.origin}/yours/?xxxxxxxxxxxxxx</p>
                    
  

                    </OnlyTextContents> 
                </div>
            </div>
        </Sectiontm>
    )
}