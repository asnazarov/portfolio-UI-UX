import { instance, jwtConfig, patchInstance } from './API';
import { VotesParamsType } from '../features/Votes/types';


export const VotesApi = {
  async getProjectsVote(params: VotesParamsType) {
    const basePage = params.params.page ? `?page=${params.params.page}` : '';
    const baseCount = params.params.count ? `&itemsPerPage=${params.params.count}` : '';
    const baseProject = params.params.project ? `&project=${params.params.project}` : '';
    const queryParams = basePage + baseCount + baseProject;
    return await instance.get(`api/${params.type}_votes/` + queryParams);
  },
  async getProjectVote(param: { id: string }) {
    return await instance.get(`api/project_votes/${param.id}`);
  },
  async postProjectsVote(param) {
    return await instance
      .post(`api/vote/${Object.keys(param)[0]}/${param[Object.keys(param)[0]]}`, null, jwtConfig())
      .catch((err) => err.response.data);
  },
  async deleteProjectsVote(params: VotesParamsType) {
    return await instance.delete(`api/${params.type}_votes/` + params.params.id, jwtConfig());
  },
}