import { NavLink } from "react-router-dom"
import "./Header.css"

export default function Header() {
    return (
        <div className="Header">
            <span className="header-brand">📅 MeetingHub</span>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/about'}>About</NavLink>
            <NavLink to={'/meetings'}>Meetings</NavLink>
            <NavLink to={'/new-meeting'}>New Meeting</NavLink>
        </div>
    )
}