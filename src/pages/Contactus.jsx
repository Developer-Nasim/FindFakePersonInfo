import { useEffect } from "react";
import ContactSection from "../components/ContactSection"; 
import HtmlTitle from "../helpers/HtmlTitle";

export default function Contactus() {
    // Set page title
    useEffect(() => {
        HtmlTitle('Contact Us')
    },[])
    return(
        <ContactSection/>
    )
}