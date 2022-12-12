import { instance, jwtConfig, patchInstance } from './API';
import { ResponseType } from '../types/ResonseType';
import { CommentsParamsType, CommentsType } from '../components/UtilityComponents/Comments/types';

export const CommunityApi = {
  async getStoryComments(params: CommentsParamsType) {
    const basePage = params.page ? `?page=${params.page}` : '?page=""';
    const baseCount = params.count ? `&itemsPerPage=${params.count}` : '';
    const projectId = params.projectId ? `&project=${params.projectId}` : '';
    const storyId = params.storyId ? `&story=${params.storyId}` : '';
    const isActive = params.isActive ? `&isActive=${params.isActive}` : '';
    const checked = params.checked ? `&checked=${params.checked}` : '';
    const author = params.author ? `&author=${params.author}` : '';
    const queryParams = basePage + baseCount + projectId + storyId + isActive + checked + author;
    return await instance.get<ResponseType<CommentsType[]>>(
      `api/story_comments` + queryParams,
      author && jwtConfig()
    );
  },

  async postStoryComment(param) {
    return await instance.post(`api/story_comments`, param.param, jwtConfig());
  },

  async patchStoryComment(param) {
    return await patchInstance.patch(`api/story_comments/${param.id}`, param.param, jwtConfig());
  },

  async deleteStoryComment(id) {
    return await instance.delete(`api/story_comments/${id}`, jwtConfig());
  },

  async imagesIntervalUpload(param) {
    return await instance.post(`/api/media_objects`, param, jwtConfig());
  },

  async delImgIntUpload(id) {
    return await instance.delete(`/api/media_objects/${id}`, jwtConfig());
  }
};
