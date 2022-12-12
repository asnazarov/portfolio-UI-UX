import {patchInstance, instance, jwtConfig} from "./API";
import {ResponseType} from "../types/ResonseType";

export const CommonApi = {
    async sendFeedback(param) {
        return await instance.post<ResponseType<any>>("/api/feedback", param)
    },
    async sendFeedbackMuseums(param) {
        return await instance.post<ResponseType<any>>("/api/museum_feedbacks", param)
    },
}
