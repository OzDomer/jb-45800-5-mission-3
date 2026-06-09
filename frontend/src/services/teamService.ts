import axios from "axios"
import type Team from "../models/Team"

const URL = import.meta.env.VITE_REST_SERVER_URL

class teamService {
    async getTeams(): Promise<Team[]> {
        const { data } = await axios.get<Team[]>(`${URL}/teams`)
        return data
    }
}

export default new teamService()