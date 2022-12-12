import {instance, jwtConfig, patchInstance} from "./API";
import {ResponseType} from "../types/ResonseType";
import {GrantType, NewGrantType} from "../features/GrantPage/types";
import {SingleNewsResponseType} from "../features/News/types";

export const GrantApi = {
    async GetCurrent() {
        return await instance.get<ResponseType<GrantType>>("/api/competitions")
    },
    async setGrant(param:NewGrantType) {
        return await instance.post<ResponseType<GrantType>>("/api/competitions", param)
    },
    async editGrant(param:NewGrantType) {
        return await patchInstance.patch<ResponseType<SingleNewsResponseType>>(`/api/competitions/${param.id}`, param, jwtConfig())
    },
    async getSpecificGrant(id:string) {
        return await instance.get<ResponseType<GrantType>>(`/api/competitions/${id}`)
    },

}
