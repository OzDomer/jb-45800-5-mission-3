import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import type MeetingDraft from "../../models/MeetingDraft"
import meetingService from "../../services/meetingService"
import type Team from "../../models/Team"
import teamService from "../../services/teamService"

export default function EditMeeting() {
    const { meetingId } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm<MeetingDraft>()

    const [teams, setTeams] = useState<Team[]>([])

    useEffect(() => {
        (async () => {
            try {
                const teams = await teamService.getTeams()
                setTeams(teams)
                const meeting = await meetingService.getMeeting(meetingId!)
                reset({
                    teamId: meeting.teamId,
                    description: meeting.description,
                    room: meeting.room,
                    startTime: new Date(meeting.startTime).toISOString().slice(0, 16) as any,
                    endTime: new Date(meeting.endTime).toISOString().slice(0, 16) as any,
                })


            } catch (e) {
                alert(e)
            }
        })()
    }, [])

    async function submit(draft: MeetingDraft) {
        try {
            await meetingService.editMeeting(meetingId!, draft)
            navigate('/meetings')
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="EditMeeting">
            <form onSubmit={handleSubmit(submit)}>
                <select {...register('teamId', { required: 'Please select a team' })}>
                    <option value="" disabled>select a team</option>
                    {teams.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                </select>
                {errors.teamId && <span>{errors.teamId.message}</span>}
                <input placeholder='Description' type="text" {...register('description', { required: 'Description is required' })} />
                {errors.description && <span>{errors.description.message}</span>}
                <input placeholder='Room' type='text' {...register('room', { required: 'Room is required' })} />
                {errors.room && <span>{errors.room.message}</span>}
                <input type='datetime-local' {...register('startTime', { required: 'Start time is required' })} />
                {errors.startTime && <span>{errors.startTime.message}</span>}
                <input type='datetime-local' {...register('endTime', {
                    required: 'End time is required',
                    validate: v => new Date(v) > new Date(getValues('startTime')) || 'End time must be after start time'
                })} />
                {errors.endTime && <span>{errors.endTime.message}</span>}

                <button>Update meeting</button>
            </form>
        </div>
    )
}
