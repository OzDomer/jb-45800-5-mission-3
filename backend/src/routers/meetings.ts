import { Router } from "express";
import { deleteMeeting, editMeeting, getMeetingById, getMeetinsPerTeamId, newMeeting } from "../controllers/meetings/controller";


const meetingsRouter = Router()


meetingsRouter.get('/by-team/:teamId', getMeetinsPerTeamId)
meetingsRouter.get('/:meetingId', getMeetingById)
meetingsRouter.post('/', newMeeting)
meetingsRouter.delete('/meetingId:', deleteMeeting)
meetingsRouter.patch('/meetingId', editMeeting)





export default meetingsRouter