import {patchInstance, instance, jwtConfig} from "./API";
import {ResponseType} from "../types/ResonseType";
import {TagResponseType} from "../features/Tags/types";

export const TagsApi = {
    async getTags() {
        return await instance.get<ResponseType<TagResponseType>>("/api/tags")
    },
}
