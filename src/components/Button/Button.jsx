import { NavLink } from 'react-router-dom'
import Class from './style.module.css'
export default function Button({redTheme,extraClass, href,children,...rest}) { 
    
    return(
        <>
        {href ? <NavLink className={`${Class.themeBtn} ${redTheme && Class.red} ${extraClass}`} to={href} {...rest} >{children}</NavLink> : <button className={`${Class.themeBtn} ${redTheme && Class.red} ${extraClass}`} {...rest}>{children}</button> }
        </>
    )
}