import {instance} from "./API";
import {ResponseType} from "../types/ResonseType";
import {RegionResponseType} from "../features/Regions/types";

export const RegionApi = {
    async getRegions() {
        return await instance.get<ResponseType<RegionResponseType>>("api/regions")
    },
}
