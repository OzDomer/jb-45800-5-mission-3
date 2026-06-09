import Joi from "joi";

export const MeetinsByTeamIdValidator = Joi.object({
    teamId: Joi.string().uuid().required()
})

export const MeetinsByIdValidator = Joi.object({
    meetingId: Joi.string().uuid().required()
})
export const newMeetingValidator = Joi.object({
    teamId: Joi.string().uuid().required(),
    startTime: Joi.date().min('now').required(),
    endTime: Joi.date().min(Joi.ref('startTime')).required(),
    description: Joi.string().required(),
    room: Joi.string().required()
})

export const deleteMeetingValidator = Joi.object({
    meetingId: Joi.string().uuid().required()
})

export const editMeetingValidator = Joi.object({
    teamId: Joi.string().uuid().required(),
    startTime: Joi.date().required(),
    endTime: Joi.date().min(Joi.ref('startTime')).required(),
    description: Joi.string().required(),
    room: Joi.string().required()
})