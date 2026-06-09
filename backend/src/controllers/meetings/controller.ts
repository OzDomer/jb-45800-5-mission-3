import type { NextFunction, Request, Response } from "express";
import Meeting from "../../models/Meeting";

export async function getMeetinsPerTeamId(request: Request<{ teamId: string }>, response: Response, next: NextFunction) {
    try {
        const { teamId } = request.params

        const meetings = await Meeting.findAll({
            where: { teamId }
        })
        response.json(meetings)
    } catch (e) {
        next(e)
    }
}
export async function getMeetingById(request: Request<{ meetingId: string }>, response: Response, next: NextFunction) {
    try {
        const { meetingId } = request.params

        const meeting = await Meeting.findByPk(meetingId)
        if (!meeting) return next(
            {
                status: 404,
                message: 'Meeting not found'
            })

        response.json(meeting)
    } catch (e) {
        next(e)
    }
}
export async function newMeeting(request: Request<{}, {}, { teamId: string, startTime: Date, endTime: Date, description: string, room: string }>, response: Response, next: NextFunction) {
    try {
        const newMeeting = await Meeting.create({
            ...request.body
        })
        response.json(newMeeting)
    } catch (e) {
        next(e)
    }
}
export async function deleteMeeting(request: Request<{ meetingId: string }, {}, {}>, response: Response, next: NextFunction) {
    try {
        const { meetingId } = request.params
        const rowCount = await Meeting.destroy({ where: { id: meetingId } })
        if (rowCount === 0) return next({
            status: 404,
            message: 'Oh no u tried to delete a meeting that does not exist, please try again'
        })

        response.json({ success: true })
    } catch (e) {
        next(e)
    }
}
export async function editMeeting(request: Request<{ meetingId: string }, {}, { teamId: string, startTime: Date, endTime: Date, description: string, room: string }>, response: Response, next: NextFunction) {
    try {
        const { meetingId } = request.params
        const [affectedRows] = await Meeting.update(request.body, { where: { id: meetingId } })
        if (affectedRows === 0) return next({
            status: 404,
            message: 'Whoops u tried to edit a meeting that does not exist better luck next time buddy'
        })
        response.json({ success: true })
    } catch (e) {
        next(e)
    }
}



