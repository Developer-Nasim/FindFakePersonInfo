import { Outlet } from "react-router-dom";
import Footer from "../footer";
import Header from "../header";

export default function PageLayout() {
    return (
        <>
        <Header/>
            <main>
                <Outlet/>
                {/* {children} */}
            </main>
        <Footer/>
        </>
    )
}