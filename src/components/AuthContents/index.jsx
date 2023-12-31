import style from './style.module.css'
import Button from "../Button/Button";
import Input from "../Singlecomponents/Input";
import { useRef, useState } from 'react'; 
import {useAuth} from '../../Contexts/AuthContext'
import { useNavigate } from 'react-router-dom';







export default function AuthContents() {
    const [error,setError] = useState(false)
    const [loginFormIs,setloginFormIs] = useState(true)
    const [fval,setFval] = useState({name:'',email:'',password:'',cpassword:'',checked:false})
    const {singup,login} = useAuth()
    const history = useNavigate()

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
        try {
            if (!loginFormIs) {
                if (fval.name.length <= 0 || fval.email.length <= 0 || fval.password.length <= 0 || fval.cpassword.length <= 0) {
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
        } catch (error) {
            console.log(error)
        }
    }
 




    return (
        <form onSubmit={submit} className={style.auth}>

            

            <div className={style.login_regis_btns}>
               
                {loginFormIs ? <Button type="button" redTheme onClick={showLoginForm}>Login</Button> : <Button type="button" onClick={showLoginForm}>Login</Button>  }
                {!loginFormIs ? <Button type="button"  onClick={showRegisForm} redTheme>Registration</Button> :<Button type="button"  onClick={showRegisForm}>Registration</Button> }
                
            </div>
            <h2 className='mb-3'>{loginFormIs ? "Login" : "Create Account"}</h2>
            {error && <div className="alert alert-danger" role="alert">Something is wrong, please check inputs and try again!</div>}
            <div className={loginFormIs ? `${style.login_wrp}` : `${style.login_wrp} d-none`}>
                <Input type={'email'} name="email" placeholder="youremail@gmail.com" onChange={HandleInputs} value={fval.email}/> 
                <Input type={'password'} name="password" placeholder="password" onChange={HandleInputs} value={fval.password}/>  
            </div>
            <div className={loginFormIs ? `${style.regis_wrp} d-none` : `${style.regis_wrp}`}>
                <Input placeholder="Name" name="name" onChange={HandleInputs} value={fval.name}/> 
                <Input type={'email'} name="email" placeholder="youremail@gmail.com" onChange={HandleInputs} value={fval.email}/>
                <Input type={'password'} name="password" placeholder="Password" onChange={HandleInputs} value={fval.password}/>
                <Input type={'password'} name="cpassword" placeholder="Confirm password" onChange={HandleInputs} value={fval.cpassword}/>
                <label htmlFor="ckb"> 
                    <Input type={'checkbox'} id="ckb" name="checked" onClick={HandleInputs}/>
                    I agree on your rules and all resposiblity is mine.
                </label>
            </div>
            <Button type="submit">Submit</Button>
        </form>
    )
}