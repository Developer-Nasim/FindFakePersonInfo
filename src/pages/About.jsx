import { useEffect } from "react";
import AboutSection from "../components/AboutSection"; 
import HtmlTitle from "../helpers/HtmlTitle";

export default function About() {
    // Set page title
    useEffect(() => {
        HtmlTitle('About')
    },[])
    return (<AboutSection />)
}