import { instance, jwtConfig, patchInstance } from './API';
import { ResponseType } from '../types/ResonseType';
import { GrantType, NewGrantType } from '../features/GrantPage/types';
import { EducationParamType } from '../features/Education/types';


export const EducationApi = {
  async getEducationMaterials(param: EducationParamType) {
    const searchParams = new URLSearchParams()
    searchParams.append('isActive', param.isActive ? 'true' : 'false')
    searchParams.append('page', String(param.page))
    searchParams.append('itemsPerPage', String(param.count))
    let filterString=''
    if(param.simplesearch) {
      searchParams.append('simplesearch', String(param.simplesearch))
    }
    if(param.educationMaterialTypes && param.educationMaterialTypes.length) {
      param.educationMaterialTypes.forEach(item => {
        filterString = filterString + `educationMaterialType[]=${item}&`
      })
    }
    if(param.educationTopics && param.educationTopics.length) {
      param.educationTopics.forEach(item => {
        filterString = filterString + `educationTopic[]=${item}&`
      })
    }
    if(param.categories && param.categories.length) {
      param.categories.forEach(item => {
        filterString = filterString + `category[]=${item}&`
      })
    }
    if(param.educationProjects && param.educationProjects.length) {
      param.educationProjects.forEach(item => {
        filterString = filterString + `educationProject[]=${item}&`
      })
    }
    if(param['iconCalendarDate[before]'] && param['iconCalendarDate[before]'].length) {
      filterString = filterString + 'iconCalendarDate[before]=' + param['iconCalendarDate[before]'] + '&'
    }
    if(param['iconCalendarDate[after]'] && param['iconCalendarDate[after]'].length) {
      filterString = filterString + 'iconCalendarDate[after]=' + param['iconCalendarDate[after]'] + '&'
    }
    return await instance.get('/api/education?' + searchParams + '&' + filterString);
  },

  async getEducationMaterialsType() {
    return await instance.get('/api/education_material_types');
  },

  async getEducationTopics() {
    return await instance.get('/api/education_topics');
  },

  async getEducationsProject() {
    return await instance.get('/api/education_projects')
  },

  async getEducationsCategories() {
    return await instance.get('/api/categories')
  }

};
