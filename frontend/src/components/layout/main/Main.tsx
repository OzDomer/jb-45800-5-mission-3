import { Route, Routes } from "react-router-dom";
import Home from "../../home/Home";
import About from "../../about/About";

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/meetings" element={<Meetings />} />
            <Route path="/add-meeting" element={<AddMeeting />} />
            <Route path="/edit-meeting/:meetingId" element={<EditMeeting />} /> */}
        </Routes>
    )
}