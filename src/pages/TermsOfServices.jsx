 import { useEffect } from "react";
import OnlyTextContents from "../components/Singlecomponents/OnlyTextContents";
 import Sectiontm from "../components/Singlecomponents/Sectiontm";
import HtmlTitle from "../helpers/HtmlTitle";

export default function TermsOfServices() {
    // Set page title
    useEffect(() => {
        HtmlTitle('Link Details')
    },[])
    return(
        <Sectiontm className="terms-of-services">
            <div className="row">
                <div className="col-lg-12">
                    <OnlyTextContents title="Terms of Use">

                    <p>This Terms of Service agreement (&quot;Agreement &ldquo;) was last updated on 02/01/2024.</p>

                    <h4>1. Acceptance of Terms</h4>
                    <p>By accessing or using {window.location.origin}, you agree to comply with and be bound by these Terms of Service.</p>

                    <h4>2. User Eligibility</h4>
                    <p>You must be a owner of a electric device like mobile/laptop/dasktop etc to use {window.location.origin} but no age limit to use it. By using the service, you represent and warrant that you meet the eligibility requirements.</p>

                    <h4>3. User Accounts</h4>
                    <p>
                        <b>a. Account Creation:</b><br />
                        <span>You may need to create an account to access certain features of the service. You agree to provide accurate and complete information during the registration process.</span>
                    </p>
                    <p>
                        <b>b. Account Security:</b><br />
                        <span>You are responsible for maintaining the security of your account credentials and for any activities that occur under your account.</span>
                    </p>


                    <h4>4. Prohibited Conduct</h4>
                    <p>You agree not to engage in any of the following activities: do not give your account someone else to use. </p>

                    <h4>6. Termination</h4>
                    <p>We reserve the right to terminate or suspend your account and access to {window.location.origin} at our sole discretion, without notice or liability, for any reason.</p>

                    <h4>7. Disclaimer of Warranties</h4>
                    <p>FakeFinder provides the service on an &quot;as is&ldquo; and &quot;as available&ldquo; basis. We make no representations or warranties of any kind, express or implied.</p>
 
    
                    <b>NOTE:</b>
                    <p>At the end, now it is your Choices what you will do. if you somehow click on the shared link page or if you click anywhere of a page then this site will collect your information. so if you are not interested to share your information then do not click on this page {window.location.origin}/yours/?xxxxxxxxxxxxxx</p>

                    
                    </OnlyTextContents> 
                </div>
            </div>
        </Sectiontm>
    )
}