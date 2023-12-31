import { useState } from 'react'
import logo from '../../assets/img/logo.png'
import Button from '../Button/Button'
import LiA from '../Singlecomponents/LiA'
import Class from "./style.module.css"
import { NavLink } from 'react-router-dom'
import {useAuth} from '../../Contexts/AuthContext'




export default function Header() {
    const [showMenu,setShowMenu] = useState(false)
    const {curentUser} = useAuth(); 
    return(
        <header> 
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-3 col-8">
                        <NavLink to="/" className={Class.logo}>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <div className="col-md-9 col-4 text-end">
                        <nav className={showMenu ? `${Class.menu} ${Class.showMenu} d-flex justify-content-end align-items-center` : Class.menu+" d-flex justify-content-end align-items-center "}>  
                            <ul className='d-flex m-0 p-0'>
                                <LiA to="/">Home</LiA>
                                <LiA to="/about">About</LiA>
                                <LiA to="/howto">How to?</LiA>
                                <LiA to="/contactus">Contact</LiA>
                            </ul>  
                            {curentUser ? <Button href={'/dashboard'}>Dashboard</Button>  : <Button redTheme href={'/join'}>Login / Join</Button>  }
                            
                        </nav>
                        <div className={Class.menuBtn+ " d-md-none d-block"}>
                            {showMenu  ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16" onClick={() => setShowMenu(!showMenu)}>
                                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                                </svg> 
                            : 
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={() => setShowMenu(!showMenu)}>
                                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                                </svg>
                            }
                            
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}