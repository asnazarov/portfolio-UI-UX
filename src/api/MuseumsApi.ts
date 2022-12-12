import { patchInstance, instance, jwtConfig } from './API';
import { ResponseType } from '../types/ResonseType';

export const MuseumsApi = {
  async getMuseumsSlider() {
    return await instance.get<ResponseType<any>>(`api/sliders?isActive=true&order[sort]=asc`);
  },
  async getInfoBlock(param) {
    return await instance.get<ResponseType<any>>(`api/museum_cities/${param.id}?isActive=true&order[sort]=asc`);
  },
  async getMuseum(param) {
    return await instance.get<ResponseType<any>>(`api/museums/${param.id}`);
  },
};
