import { instance, jwtConfig, patchInstance } from './API';
import { VotesParamsType } from '../features/Votes/types';


export const OtherApi = {
  async getVKPosts() {
    // const baseProject = params.params.project ? `&project=${params.params.project}` : '';
    const queryParams = '';
    return await instance.get(`api/vk/posts` + queryParams);
  },

  async getMainPage(param) {
    return await instance.get(`/api/main_pages/${param.id}`);
  }

};