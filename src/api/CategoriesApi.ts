import {patchInstance, instance, jwtConfig} from "./API";
import {ResponseType} from "../types/ResonseType";
import {CategoryResponseType} from "../features/Categories/types";

export const CateegoriesApi = {
    async getCategories() {
        return await instance.get<ResponseType<CategoryResponseType>>("/api/categories")
    },
}
