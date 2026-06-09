import './Home.css'
import meetingPicture from '../../assets/meeting-picture.png'

export default function Home() {
    return (
        <div className="Home">
            <h1>Dev Team Meeting Scheduler</h1>
            <p>
                Manage and schedule meetings for your development teams — all in one place.
                Select a team, view upcoming and past meetings, and keep everyone in sync.
            </p>
            <img src={meetingPicture} alt="Team meeting" />
        </div>
    )
}
