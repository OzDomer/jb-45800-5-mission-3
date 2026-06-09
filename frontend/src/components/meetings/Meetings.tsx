import { useEffect, useState } from "react"
import type Team from "../../models/Team"
import meetingService from "../../services/meetingService"
import type Meeting from "../../models/Meeting"
import teamService from "../../services/teamService"
import MeetingCard from "../meetingCard/MeetingCard"
import './Meetings.css'

export default function Meetings() {

    const [teams, setTeams] = useState<Team[]>([])
    const [meetings, setMeetings] = useState<Meeting[]>([])

    useEffect(() => {
        (async () => {
            try {
                const teams = await teamService.getTeams()
                setTeams(teams)
            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function teamChanged(event: React.ChangeEvent<HTMLSelectElement>) {
        try {
            const teamId = event.currentTarget.value
            const meetings = await meetingService.getMeetingsByTeam(teamId)
            setMeetings(meetings)
        } catch (e) {
            alert(e)
        }
    }
    function meetingDeleted(id: string) {
        setMeetings(meetings.filter(m => m.id !== id))
    }

    return (
        <div className="Meetings">
            <h1>Meetings</h1>
            <select className="team-select" defaultValue='' onChange={teamChanged}>
                <option value="" disabled>please select a team</option>
                {teams.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
            </select>
            <div className="meetings-list">
                {meetings.length === 0
                    ? <p className="meetings-empty">Select a team to see their meetings.</p>
                    : meetings.map(m => <MeetingCard key={m.id} meeting={m} onDelete={meetingDeleted} />)
                }
            </div>
        </div>
    )
}