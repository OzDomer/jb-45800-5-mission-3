import { Router } from "express";
import { getMeetinsPerTeamId } from "../controllers/meetings/controller";


const meetingsRouter = Router()


meetingsRouter.get('/:teamId', getMeetinsPerTeamId)



export default meetingsRouter