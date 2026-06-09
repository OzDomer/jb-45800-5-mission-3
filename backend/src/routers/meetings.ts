import { Router } from "express";
import { getMeetingById, getMeetinsPerTeamId, newMeeting } from "../controllers/meetings/controller";


const meetingsRouter = Router()


meetingsRouter.get('/by-team/:teamId', getMeetinsPerTeamId)
meetingsRouter.get('/:meetingId', getMeetingById)
meetingsRouter.post('/', newMeeting)



export default meetingsRouter