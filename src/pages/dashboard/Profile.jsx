import { useEffect } from "react"; 
import Sectiontm from "../../components/Singlecomponents/Sectiontm";
import AllLinks from "../../components/dashboard/AllLinks";
import CreateNewLink from "../../components/dashboard/CreateNewLink";
import ProfileCart from "../../components/dashboard/ProfileCart";
import HtmlTitle from "../../helpers/HtmlTitle";

export default function Profile() {
    // Set page title
    useEffect(() => {
        HtmlTitle('Profile')
    },[]) 

    return (
        <Sectiontm className="profile-section">
            <div className="row">
                <div className="col-md-4">
                    <div className="aside mb-3">
                      <ProfileCart/>
                    </div>
                </div>
                <div className="col-md-8">
                    <div className="profile-contents">
                      <CreateNewLink/>
                      <AllLinks />
                    </div>
                </div>
            </div>
        </Sectiontm>
    )
}