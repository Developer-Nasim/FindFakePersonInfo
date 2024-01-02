import { useReducer, useRef, useState } from "react";
import Button from "../Button/Button"; 
import Sectiontm from "../Singlecomponents/Sectiontm";
import Class from './style.module.css'
import SendMail from "../../helpers/MailSending"; 
import { useTranslation } from "react-i18next";

 

// although we don't need to use this useReducer, we can do it through useState
const initState = {name:'',email:'',subj:'',message:''}
const reduceing = (state,{form,target,acType}) => {
    switch (acType) {
        case 'storeData': 
            return {...state,[target.name]: target.value} 
        case 'submitData': 
            return (
                SubmitData()
            )
        default:
            return state;
    }

    function SubmitData() {


        const {name,email,subj,message} = state 

        const AddRemClasses = () => {
            Object.keys(state).forEach((item) => { 
                const inp = form.querySelector(`[name='${item}']`)
                if (0 >= state[item].length) {
                    inp.classList.add('empty')
                }else{
                    inp.classList.remove('empty')
                }
            })
        } 
        AddRemClasses()

        if (name.length > 0 && email.length > 0 && subj.length > 0 && message.length > 0) {
            const alert = form.querySelector('.alert')
            alert.classList.remove('d-none')
            setTimeout(() => {
                alert.classList.add('d-none')
            }, 1000);
            return {name:'',email:'',subj:'',message:''}
        }
    }
}


export default function ContactSection() {

    const [fstate, dispatcher] = useReducer(reduceing,initState)
    const contact_form = useRef(null)
    const [loading,setLoading] = useState(false)
    const {t} = useTranslation()

    const inputChanges = (e) => {
        dispatcher({
            form:contact_form.current,
            target: e.target,
            acType: 'storeData'
        })
    }

    const submitForm = (e) => {
        e.preventDefault()
        setLoading(true)
        try {
            if (fstate.name.length > 0 || fstate.email.length > 0 || fstate.subj.length > 0 || fstate.message.length > 0) {
                SendMail(fstate)
            }
            dispatcher({
                form:contact_form.current,
                target: 'none',
                acType: 'submitData'
            })  
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false) 
        }
    }


    return (
        <Sectiontm className={Class.ContactSection}>
            <div className="row">
                <div className="col-lg-12">
                    <form onSubmit={submitForm} className={Class.contact_form} ref={contact_form}>
                        <h1>{t('home.contact.heading')}</h1>
                        <p>{t('home.contact.content')}</p>

                        <div className="alert alert-success d-none" role="alert">Message sent successfully!</div>

                        <input type="text" placeholder="Your Name" name="name" value={fstate?.name || ''} onChange={inputChanges}/>
                        <input type="email" placeholder="Your Email or Phone number" name="email" value={fstate?.email || ''} onChange={inputChanges}/>
                        <input type="text" placeholder="Reason or subject" name="subj" value={fstate?.subj || ''} onChange={inputChanges}/>
                        <textarea placeholder="Message...." name="message" value={fstate?.message || ''} onChange={inputChanges}/>

                        {!loading ? <Button type="submit">{t('home.contact.button')}</Button> : <div className="disabled_blk"><Button type="button" disabled>{t('home.contact.button')}</Button></div> }
                        
                    </form>
                </div>
            </div>
        </Sectiontm> 
    )
}