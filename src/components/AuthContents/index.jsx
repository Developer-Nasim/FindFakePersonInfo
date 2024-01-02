import style from './style.module.css'
import Button from "../Button/Button";
import Input from "../Singlecomponents/Input"; 
import {useAuth} from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import { useState } from 'react';

 


export default function AuthContents() {
    const [loading,setLoading] = useState(false)
    const [error,setError] = useState(false)
    const [loginFormIs,setloginFormIs] = useState(true)
    const [fval,setFval] = useState({name:'',email:'',password:'',cpassword:'',checked:false})
    const {singup,login} = useAuth()
    const history = useNavigate()
    const {t} = useTranslation()
     
 
    const showLoginForm = () => {
        setloginFormIs(true)
    }
    const showRegisForm = () => {
        setloginFormIs(false)
    }

    const HandleInputs = (e) => {
        setFval({
            ...fval,
            [e.target.name]:e.target.name === 'checked'? !fval.checked : e.target.value 
        })  
    }

    const submit = async (e) =>{
        e.preventDefault() 
        setLoading(true)
        try {
            if (!loginFormIs) {
                if (fval.name.length <= 0 || fval.email.length <= 0 || fval.password.length <= 0 || fval.cpassword.length <= 0 || (fval.password !== fval.cpassword)) {
                    setError(true)
                }else{ 
                    await singup(fval.email,fval.password,fval.name)
                    history('/dashboard')
                }
            }else{
                
                if (fval.password.length <= 0 || fval.email.length <= 0) {
                    setError(true)
                }else{  
                    await login(fval.email,fval.password)
                    history('/dashboard')
                }
            }
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.error(error)
        }
    }
 




    return (
        <form onSubmit={submit} className={style.auth}>

            

            <div className={style.login_regis_btns}>
               
                {loginFormIs ? <Button type="button" redTheme onClick={showLoginForm}>{t('join.login_button')}</Button> : <Button type="button" onClick={showLoginForm}>Login</Button>  }
                {!loginFormIs ? <Button type="button"  onClick={showRegisForm} redTheme>{t('join.registration_button')}</Button> :<Button type="button"  onClick={showRegisForm}>Registration</Button> }
                
            </div>
            <h2 className='mb-3'>{loginFormIs ? t('join.login_heading') : t('join.registration_heading')}</h2>
            {error && <div className="alert alert-danger" role="alert">Something is wrong, please check inputs and try again!</div>}
            <div className={loginFormIs ? `${style.login_wrp}` : `${style.login_wrp} d-none`}>
                <Input type={'email'} name="email" placeholder={t('join.placeholder_email')} onChange={HandleInputs} value={fval.email}/> 
                <Input type={'password'} name="password" placeholder={t('join.placeholder_password')} onChange={HandleInputs} value={fval.password}/>  
            </div>
            <div className={loginFormIs ? `${style.regis_wrp} d-none` : `${style.regis_wrp}`}>
                <Input placeholder={t('join.placeholder_name')} name="name" onChange={HandleInputs} value={fval.name}/> 
                <Input type={'email'} name="email" placeholder={t('join.placeholder_email')} onChange={HandleInputs} value={fval.email}/>
                <Input type={'password'} name="password" placeholder={t('join.placeholder_password')} onChange={HandleInputs} value={fval.password}/>
                <Input type={'password'} name="cpassword" placeholder={t('join.placeholder_cpassword')} onChange={HandleInputs} value={fval.cpassword}/>
                <label htmlFor="ckb"> 
                    <Input type={'checkbox'} id="ckb" name="checked" onClick={HandleInputs}/>
                    {t('join.terms_txt')}
                </label>
            </div> 
            {!loading ? <Button type="submit">{t('dashboard.create_link.button')}</Button> : <div className="disabled_blk"><Button type="button" disabled>{t('dashboard.create_link.button')}</Button></div> }
            
        </form>
    )
}