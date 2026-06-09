import type Meeting from "../../models/Meeting"
import { useNavigate } from "react-router-dom"
import meetingService from "../../services/meetingService"
import './MeetingCard.css'

interface Props {
    meeting: Meeting
    onDelete: (id: string) => void
}

export default function MeetingCard({ meeting, onDelete }: Props) {
    const navigate = useNavigate()
    const isFuture = new Date(meeting.startTime) > new Date()

    const durationMs = new Date(meeting.endTime).getTime() - new Date(meeting.startTime).getTime()
    const hours = Math.floor(durationMs / 3600000)
    const minutes = Math.floor((durationMs % 3600000) / 60000)

    async function handleDelete() {
        try {
            await meetingService.deleteMeeting(meeting.id)
            onDelete(meeting.id)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className={`MeetingCard ${isFuture ? 'future' : 'past'}`}>
            <h3>{meeting.room}</h3>
            <p>{meeting.description}</p>
            <p>Start: {new Date(meeting.startTime).toLocaleString()}</p>
            <p>End: {new Date(meeting.endTime).toLocaleString()}</p>
            <p className="duration">Duration: {hours}h {minutes}m</p>
            <div className="card-actions">
                <button className="btn-delete" onClick={handleDelete}>Delete</button>
                <button className="btn-edit" onClick={() => navigate(`/edit-meeting/${meeting.id}`)}>Edit</button>
            </div>
        </div>
    )
}
