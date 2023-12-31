import { NavLink } from "react-router-dom";
import Class from '../header/style.module.css'

export default function LiA({children, ...rest}) {
    return <li><NavLink className={({isActive}) => isActive ? `${Class.active} activeForProfile` : ""} {...rest} >{children}</NavLink></li>
}