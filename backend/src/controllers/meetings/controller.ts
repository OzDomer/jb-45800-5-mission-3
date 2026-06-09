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