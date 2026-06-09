import axios from "axios"
import type Meeting from "../models/Meeting"
import type MeetingDraft from "../models/MeetingDraft"

const URL = import.meta.env.VITE_REST_SERVER_URL


class meetingService {

    async getMeetingsByTeam(teamId: string): Promise<Meeting[]> {
        const { data } = await axios.get<Meeting[]>(`${URL}/meetings/by-team/${teamId}`)
        return data
    }
    async getMeeting(meetingId: string): Promise<Meeting> {
        const { data } = await axios.get<Meeting>(`${URL}/meetings/${meetingId}`)
        return data
    }

    async newMeeting(draft: MeetingDraft): Promise<Meeting> {
        const { data } = await axios.post<Meeting>(`${URL}/meetings`, draft)
        return data
    }
    async deleteMeeting(meetingId: string): Promise<{ success: boolean }> {
        const { data } = await axios.delete<{ success: boolean }>(`${URL}/meetings/${meetingId}`)
        return data
    }
    async editMeeting(meetingId: string, draft: MeetingDraft): Promise<Meeting> {
        const { data } = await axios.patch<Meeting>(`${URL}/meetings/${meetingId}`, draft)
        return data
    }
}

export default new meetingService()