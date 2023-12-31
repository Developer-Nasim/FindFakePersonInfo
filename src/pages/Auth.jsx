import { useEffect, useState } from "react";
import Button from "../components/Button/Button";
import Input from "../components/Singlecomponents/Input";
import Sectiontm from "../components/Singlecomponents/Sectiontm";
import AuthContents from "../components/AuthContents";
import { useAuth } from "../Contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import HtmlTitle from "../helpers/HtmlTitle";

export default function Auth() {
    const {curentUser} = useAuth()
    const history = useNavigate()
    // useEffect(() => {
    //     if (curentUser) {
    //         history('/dashboard')
    //     }
    // },[])
    // Set page title
    useEffect(() => {
        HtmlTitle('Login or Created account to get started')
    },[])
    return(
        <Sectiontm className="auth-section">
            <div className="row">
                <div className="col-lg-8 offset-lg-2">
                    <AuthContents/>
                </div>
            </div>
        </Sectiontm>
    )
}