import { Route, Routes } from "react-router-dom";
import Home from "../../home/Home";
import About from "../../about/About";
import Meetings from "../../meetings/Meetings";
import NewMeeting from "../../newMeeting/NewMeeting";
import EditMeeting from "../../editMeeting/EditMeeting";
import './Main.css'

export default function Main() {
    return (
        <div className="Main">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/meetings" element={<Meetings />} />
                <Route path="/new-meeting" element={<NewMeeting />} />
                <Route path="/edit-meeting/:meetingId" element={<EditMeeting />} />
            </Routes>
        </div>
    )
}