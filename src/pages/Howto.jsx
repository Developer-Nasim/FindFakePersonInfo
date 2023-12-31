import { useEffect } from "react";
import HowtoSection from "../components/HowtoSection";
import HtmlTitle from "../helpers/HtmlTitle";

export default function Howto() {
    // Set page title
    useEffect(() => {
        HtmlTitle('How to use this app?')
    },[])
    return(
        <HowtoSection/>
    )
}