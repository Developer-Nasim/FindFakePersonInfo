 import { useEffect } from "react"; 
import Sectiontm from "../components/Singlecomponents/Sectiontm";
import HtmlTitle from "../helpers/HtmlTitle";
import Button from "../components/Button/Button";
import ContentCart from "../components/ContentCart";

export default function NotFound() {
    // Set page title
    useEffect(() => {
        HtmlTitle('No Content Found')
    },[])
    return(
        <Sectiontm className="not_found">
            <div className="row">
                <div className="col-lg-12">
                    <div className="not_found_wrp">
                    <ContentCart>
                        <h2 className="mb-4">This page is not avilable</h2>
                        <Button href={'/'}>Go Back</Button>
                    </ContentCart>
                    </div>
                </div>
            </div>
        </Sectiontm>
    )
}