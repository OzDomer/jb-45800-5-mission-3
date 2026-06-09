import './NewMeeting.css'
import { useEffect, useState } from "react"
import type Team from "../../models/Team"
import teamService from "../../services/teamService"
import { useForm } from "react-hook-form"
import type MeetingDraft from "../../models/MeetingDraft"
import meetingService from "../../services/meetingService"

export default function NewMeeting() {
    const [teams, setTeams] = useState<Team[]>([])
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        (async () => {
            try {
                const data = await teamService.getTeams()
                setTeams(data)
            } catch (e) {
                alert(e)
            }
        }
        )()
    }, [])

    const { register, handleSubmit, getValues, reset, formState: { errors } } = useForm<MeetingDraft>({ defaultValues: { teamId: '' } })

    async function submit(draft: MeetingDraft) {
        try {
            await meetingService.newMeeting(draft)
            reset({ teamId: '', description: '', room: '', startTime: undefined, endTime: undefined })
            setSuccess(true)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div className="NewMeeting">
            <h1>New Meeting</h1>
            {success && <p className="success-msg">Meeting created successfully! You can add another.</p>}
            <form onSubmit={handleSubmit(submit)}>
                <select defaultValue='' {...register('teamId', {
                    required: 'Please select a team',
                    validate: v => v !== '' || 'Please select a team'
                })}>
                    <option value="" disabled>select a team</option>
                    {teams.map(({ id, name }) => <option key={id} value={id}>{name}</option>)}
                </select>
                {errors.teamId && <span className="field-error">{errors.teamId.message}</span>}

                <input placeholder='Description' type="text" {...register('description', {
                    required: {
                        value: true,
                        message: 'You must fill a descripition'
                    }
                })} />
                {errors.description && <span className="field-error">{errors.description.message}</span>}
                <input placeholder='Room' type='text' {...register('room', {
                    required: {
                        value: true,
                        message: 'You must state the room for the meeting'
                    }
                })} />
                {errors.room && <span className="field-error">{errors.room.message}</span>}
                <input type='datetime-local' {...register('startTime', {
                    required: 'Start time is required',
                    validate: v => new Date(v) > new Date() || 'Start time cannot be in the past'
                })} />
                {errors.startTime && <span className="field-error">{errors.startTime.message}</span>}
                <input type='datetime-local' {...register('endTime', {
                    required: 'End time is required',
                    validate: v => new Date(v) > new Date(getValues('startTime')) || 'End time must be after start time'
                })} />
                {errors.endTime && <span className="field-error">{errors.endTime.message}</span>}
                <button>Create meeting</button>

            </form>

        </div>
    )
}