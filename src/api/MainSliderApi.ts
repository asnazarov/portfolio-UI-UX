import { instance } from './API';
import { ResponseType } from '../types/ResonseType';
import { SliderResponseType } from '../features/MainSlider/types';

export const SliderApi = {
  async getSlider() {
    return await instance.get<ResponseType<SliderResponseType>>('api/main_sliders');
  },
};
