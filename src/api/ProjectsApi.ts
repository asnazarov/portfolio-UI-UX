import { instance, jwtConfig, patchInstance } from './API';
import { ResponseType } from '../types/ResonseType';
import { CategoryResponseType } from '../features/Categories/types';
import { ProjectParamsType, ProjectsResponseType, ProjectType } from '../features/Projects/types';
import { CommentsParamsType, CommentsType } from '../components/UtilityComponents/Comments/types';

export const ProjectsApi = {
  async getProjects(params: ProjectParamsType) {
    const basePage = params.page ? `?page=${params.page}` : '';
    const baseCount = params.count ? `&itemsPerPage=${params.count}` : '';
    const baseRegion = params.region ? `&region=${params.region}` : '';
    const baseCategory = params.category ? `&category=${params.category}` : '';
    const is_main = params.is_main ? `&is_main=true` : '';
    const is_top = params.is_top ? `&is_top=true` : '';
    const simplesearch = params.simplesearch ? `&simplesearch=${params.simplesearch}` : '';
    const id = params.id ? `&id[]=${params.id}` : '';
    const orderId = params.orderId ? '&order[pubAt]=desc' : '&order[pubAt]=asc'
    const idArr = params.idArr ? params.idArr : '';
    const author = params.author ? `?author=/api/users/${params.author}` : '';
    const title = params.title ? `&title=${params.title}` : '';
    const is_confirmed = `&isActive=true`;
    const all = params.all ? '&pagination=false' : '';
    const onlyGrant = params.onlyGrant ? '&projectCategory=1' : '';
    const grantCategory = `&grantRequest.grantCategory=3`;
    const existsMediaAlbums = params.existsMediaAlbums ? '&exists[mediaAlbums]=true' : '';
    const isGrandCompetition = params.isGrandCompetition ? '&is_grand_competition=true' : '';
    const queryParams =
      // grantCategory+
      basePage +
      baseCount +
      baseRegion +
      baseCategory +
      is_main +
      is_top +
      simplesearch +
      idArr +
      author +
      title +
      is_confirmed +
      orderId +
      id +
      all +
      onlyGrant +
      existsMediaAlbums +
      isGrandCompetition;
    return await instance.get<ResponseType<ProjectsResponseType>>('api/projects' + queryParams);
  },
  async getProjectsIds() {
    return await instance.get<ResponseType<CategoryResponseType>>('api/project/ids');
  },
  async getCompetition() {
    return await instance.get<ResponseType<CategoryResponseType>>('api/competitions/1');
  },
  async getCurrentProject(id: string) {
    return await instance.get<ResponseType<ProjectType>>('api/projects/' + id);
  },
  async getMainPageProjects(param: {
    id1: string;
    id2: string;
    id3: string;
    id4: string;
    id5: string;
  }) {
    return await instance.get(
      `api/projects?id[]=${param.id1}&id[]=${param.id2}&id[]=${param.id3}&id[]=${param.id4}&id[]=${param.id5}`
    );
  },

  //todo Комментарии для projects ( /api/project_comments )
  async getProjectComments(params: CommentsParamsType) {
    const basePage = params.page ? `?page=${params.page}` : '?page=""';
    const baseCount = params.count ? `&itemsPerPage=${params.count}` : '';
    const projectId = params.projectId ? `&project=${params.projectId}` : '';
    const isActive = params.isActive ? `&isActive=${params.isActive}` : '';
    const checked = params.checked ? `&checked=${params.checked}` : '';
    const author = params.author ? `&author=${params.author}` : '';
    const queryParams = basePage + baseCount + projectId + isActive + checked + author;
    return await instance.get<ResponseType<CommentsType[]>>(
      'api/project_comments' + queryParams,
      author && jwtConfig()
    );
  },
  async postProjectComment(param) {
    return await instance.post(`api/project_comments`, param.param, jwtConfig());
  },
  async patchProjectComment(param) {
    return await patchInstance.patch(`api/project_comments/${param.id}`, param, jwtConfig());
  },
  async deleteProjectComment(id: string) {
    return await instance.delete(`api/project_comments/${id}`, jwtConfig());
  },
};
