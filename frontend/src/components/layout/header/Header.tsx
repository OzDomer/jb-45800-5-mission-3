import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <div className="Header">
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/meetings'}>Meetings</NavLink>
            <NavLink to={'/new-meeting'}>New meeting</NavLink>
        </div>
    )
}