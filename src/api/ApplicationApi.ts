import { ProjectParamsType } from '../features/Projects/types';
import { instance, instanceDoc, jwtConfig, patchInstance } from './API';
import { ResponseType } from '../types/ResonseType';
import {
  ApplicationChangeType,
  ApplicationResponseType,
  CreateApplicationType,
  ActiveApplicationType,
  UploadDocument,
} from '../features/ApplicationLK/types';

export const ApplicationApi = {
  async getApplications(params: ProjectParamsType) {
    const basePage = params.page ? `?page=${params.page}` : '';
    const baseCount = params.count ? `&itemsPerPage=${params.count}` : '';
    const baseRegion = params.region ? `&region=${params.region}` : '';
    const baseCategory = params.category ? `&category=${params.category}` : '';
    const mainTrue = params.main === 1 ? `&main=true` : '';
    const mainFalse = params.main === 0 ? `&main=false` : '';
    const is_main = params.is_main ? `&is_main=true` : '';
    const id = params.id ? `&id[]=${params.id}` : '';
    // const author = params.author ? `?author=/api/users/${params.author}` : '';
    const author = params.author ? `?author=${params.author}` : '';
    const title = params.title ? `&title=${params.title}` : '';
    const is_confirmed = `&is_confirmed=true`;
    const all = params.all ? '&pagination=false' : '';
    const existsMediaAlbums = params.existsMediaAlbums ? '&exists[mediaAlbums]=true' : '';
    const isGrandCompetition = params.isGrandCompetition ? '&is_grand_competition=true' : '';
    const queryParams =
      basePage +
      baseCount +
      baseRegion +
      baseCategory +
      mainTrue +
      mainFalse +
      author +
      title +
      is_confirmed +
      id +
      all +
      existsMediaAlbums +
      isGrandCompetition;
    return await instance.get<ResponseType<ApplicationResponseType>>(
      'api/grant_requests' + queryParams,
      jwtConfig()
    );
  },
  async getGrantRegulations() {
    return await instance.get('regulations/list', jwtConfig());
  },
  async getGrantRegulationsId(param) {
    return await instance.get(`api/regulations/format/${param.id}?isActive=true`);
  },
  async getApplication(id: string) {
    return await instance.get<ResponseType<ActiveApplicationType>>(
      'api/grant_requests/' + id,
      jwtConfig()
    );
  },
  async createApplication(payload: CreateApplicationType) {
    return await instance.post('api/grant_requests', payload, jwtConfig());
  },
  async uploadDocument(payload: UploadDocument) {
    return await instanceDoc.post(
      `api/grant_requests/${payload.grantRequestId}/uploads/${payload.typeFile}`,
      payload.file,
      jwtConfig()
    );
  },
  async deleteDocument(payload: { grantRequestId: string | number; fileId: string | number }) {
    return await instanceDoc.delete(
      `api/grant_requests/${payload.grantRequestId}/delete/${payload.fileId}`,
      jwtConfig()
    );
  },

  async editApplication(payload: ApplicationChangeType) {
    return await patchInstance.patch('api/grant_requests/' + payload.id, payload.data, jwtConfig());
  },

  //даты приема заявков
  async getCanAdd() {
    return await instance.get(`api/grant_requests/can-add`);
  },
};
