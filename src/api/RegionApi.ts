import { instance } from './API';
import { ResponseType } from '../types/ResonseType';
import { RegionParamsType, RegionResponseType } from '../features/Regions/types';

export const RegionApi = {
  async getRegions(params: RegionParamsType) {
    const baseIsActive = params.isActive ? `?isActive=${params.isActive}` : '';
    const baseSort = params['order[sort]'] ? `&order[sort]=${params['order[sort]']}` : '';
    const queryParams = baseIsActive + baseSort;
    return await instance.get<ResponseType<RegionResponseType>>('api/regions' + queryParams);
  },
  async getGrantRegion(id) {
    return await instance.get('api/grant_regions/');
  },
  async getRegionWithProjects() {
    return await instance.get('api/dictionary/region/with_projects/');
  },
  async getCities(params) {
    const baseCount = params.count ? `?itemsPerPage=${params.count}` : '';
    const queryParams = baseCount;
    return await instance.get('api/grant_cities' + queryParams);
  },
};
