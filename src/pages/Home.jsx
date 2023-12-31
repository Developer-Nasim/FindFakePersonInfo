import Hero from "../components/Hero"; 
import AboutSection from "../components/AboutSection"; 
import HowtoSection from "../components/HowtoSection";
import ContactSection from "../components/ContactSection"; 
import { useEffect } from "react";
import HtmlTitle from "../helpers/HtmlTitle"; 


export default function Home() {
    useEffect(() => {
        HtmlTitle('Home - Find a fake user infomation with photo')
    },[]) 


    return (
        <> 
            <Hero/>  
            <div className="mt-5 d-block"></div> 
            <AboutSection />
            <div className="mt-5 d-block"></div> 
            <HowtoSection/>
            <div className="mt-5 pt-5 d-block"></div> 
            <ContactSection />
        </>
    )
}