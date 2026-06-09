import { Router } from "express";
import { deleteMeeting, editMeeting, getMeetingById, getMeetinsPerTeamId, newMeeting } from "../controllers/meetings/controller";
import paramsValidation from "../middlewares/params-validation";
import { deleteMeetingValidator, editMeetingValidator, MeetinsByIdValidator, MeetinsByTeamIdValidator, newMeetingValidator } from "../controllers/meetings/validator";
import bodyValidation from "../middlewares/body-validation";


const meetingsRouter = Router()


meetingsRouter.get('/by-team/:teamId', paramsValidation(MeetinsByTeamIdValidator), getMeetinsPerTeamId)
meetingsRouter.get('/:meetingId', paramsValidation(MeetinsByIdValidator),getMeetingById)
meetingsRouter.post('/', bodyValidation(newMeetingValidator),newMeeting)
meetingsRouter.delete('/:meetingId', paramsValidation(deleteMeetingValidator),deleteMeeting)
meetingsRouter.patch('/:meetingId', paramsValidation(MeetinsByIdValidator),bodyValidation(editMeetingValidator),editMeeting)





export default meetingsRouter