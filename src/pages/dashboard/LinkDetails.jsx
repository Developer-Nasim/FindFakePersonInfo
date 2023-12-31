import { useEffect } from "react"; 
import Sectiontm from "../../components/Singlecomponents/Sectiontm"; 
import LinkDetailsContents from "../../components/dashboard/LinkDetailsContents";
import ProfileCart from "../../components/dashboard/ProfileCart";
import HtmlTitle from "../../helpers/HtmlTitle";

export default function LinkDetails() {

    // Set page title
    useEffect(() => {
        HtmlTitle('Link Details')
    },[])

    return (
        <Sectiontm className="LinkDetails-section">
            <div className="row">
                <div className="col-md-4">
                    <div className="aside mb-3">
                      <ProfileCart/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="profile-contents">
                       <LinkDetailsContents/>
                    </div>
                </div>
            </div>
        </Sectiontm>
    )
}