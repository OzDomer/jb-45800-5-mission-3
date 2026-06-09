import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <div className="Header">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
        </div>
    )
}