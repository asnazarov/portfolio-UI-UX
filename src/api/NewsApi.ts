import {patchInstance, instance, jwtConfig} from "./API";
import {ResponseType} from "../types/ResonseType";
import {
  NewsArticleQueryType,
  NewsParamsType,
  NewsResponseType,
  SingleNewsResponseType, UniversalAddFormType
} from '../features/News/types';
import { CreatePostType } from '../features/CommunityPage/types';

export const NewsApi = {
  async getNewsUniversal(payload: NewsParamsType) {
    const page = payload.page ? `?page=${payload.page}` : '?page=1'
    const count = payload.count ? `&itemsPerPage=${payload.count}` : '&itemsPerPage=20'
    if(payload.region !== undefined && payload.region !== null){
      var region = '';
      payload.region.forEach(function(item) {
        region = region + `&region[]=${item}`;
      });
    }
    if(payload.tag !== undefined && payload.tag !== null){
      var tag = '';
      payload.tag.forEach(function(item) {
        tag = tag + `&tag[]=${item}`;
      });
    }
    if(payload.category !== undefined && payload.category !== null){
      var category = '';
      payload.category.forEach(function(item) {
        category = category + `&category[]=${item}`;
      });
    }
    const project = payload.project !== undefined && payload.project !== null && payload.project.length > 0 ? `&project=${payload.project}` : ""
    const isMainTrue = payload.isMain ? `&isMain=true` : ""
    const isMainFalse = payload.isMain === false ? `&isMain=false` : ""
    const isTop = payload.isTop ? `&isTop=true` : ''
    const isCompetitionRelatedTrue = payload.isCompetitionRelated ? `&isCompetitionRelated=true` : ""
    const isCompetitionRelatedFalse = payload.isCompetitionRelated === false ? `&isCompetitionRelated=false` : ""
    const isMassMedia = payload.isMassMedia ? `&isMassMedia=true` : ""
    const grantId = payload.grantId ? `&grantId=${payload.grantId}` : ""
    const id = payload.id ? `&id=${payload.id}` : ""
    const orderId = payload.orderId ? '&order[created_at]=desc' : '&order[created_at]=asc'
    const is_confirmed = '&is_confirmed=true'

    // &created_at[before]=2021-05-21T18:27:00+00:00
    // simplesearch регистро независимый поиск по контенту и заголовку.
    const dateBefore = payload.dateBefore ? `&created_at[strictly_before]=${payload.dateBefore}` : ""
    const dateAfter = payload.dateAfter ? `&created_at[strictly_after]=${payload.dateAfter}` : ""
    const simplesearch = payload.simplesearch ? `&simplesearch=${payload.simplesearch}` : '';
    const title = payload.title ? `&title=${payload.title}` : ""
    // const storyType = payload.storyType ? `&story_type=${payload.storyType}` : "&story_type=default";
    //storyType = analytics, community, community_admin, community_ambassador
    const storyType = payload.storyType ? `&story_type=${payload.storyType}` : '';
    const storyTypeArr = payload.storyTypeArr ? `&story_type[]=analytics&story_type[]=default`: ''
    const isAnalyticType = payload.analytic ? "&story_type=analytics" : ""
    const isAchievement = payload.is_achievement ? "&is_achievement=true" : ""
    const author = payload.author ? `&author=${payload.author}` : ""
    const isGrandCompetition = payload.isGrandCompetition ? `&is_grand_competition=true` : ''
    const regional = payload.regional === true ? '&isRegional=true' : payload.regional === false ? '&isRegional=false' : '';
    const queryParams = page + count + dateAfter + dateBefore + category + region + tag + isMainTrue
      + isMainFalse + grantId + isMassMedia + id + project
      + isCompetitionRelatedTrue + isCompetitionRelatedFalse + title + simplesearch
      + storyType + storyTypeArr + isAnalyticType + is_confirmed + orderId + isAchievement
      + author + isTop + isGrandCompetition + regional;
    return await instance.get<ResponseType<NewsResponseType>>("api/stories" + queryParams)
  },
  async createNews(payload: UniversalAddFormType) {
    const now = new Date()
    const date = now.toUTCString()
    const basePayload = {
      title: payload.title,
      headerPhoto: payload.headerPhoto,
      images: payload.images,
      region: payload.region ? `${payload.region}` : '',
      category: payload.category,
      isTop: false,
      isConfirmed: false,
      isRegional: false,
      isMain: payload.isMain,
      isMassMedia: payload.isMassMedia,
      content: payload.content,
      storyType: payload.storyType,
      date
    }
    return await instance.post<ResponseType<SingleNewsResponseType>>("api/stories", basePayload, jwtConfig())
  },

  // async editNews(payload: { category?: string, images?: string[], title?: string, region?: string }, id: string | number) {
  //   return await patchInstance.patch<ResponseType<SingleNewsResponseType>>(`api/stories/${id}`, payload, jwtConfig())
  // },
  async getCurrentNews(payload: { id: string }) {
    return await instance.get<ResponseType<SingleNewsResponseType>>(`api/stories/${payload.id}`)
  },
  // async getArticleQuery(NewsArticle: NewsArticleQueryType) {
  //   const page = NewsArticle.page ? `?page=${NewsArticle.page}` : ''
  //   const count = NewsArticle.itemsPerPage ? `&itemsPerPage=${NewsArticle.itemsPerPage}` : ''
  //   const queryParams = page + count
  //   return await instance.get<ResponseType<SingleNewsResponseType>>(`api/articles${queryParams}`)
  // },
  async getMassMediaStory(MassMedia: NewsArticleQueryType) {
    const page = MassMedia.page ? `?page=${MassMedia.page}` : ''
    const count = MassMedia.itemsPerPage ? `&itemsPerPage=${MassMedia.itemsPerPage}` : ''
    const queryParams = page + count
    return await instance.get<ResponseType<SingleNewsResponseType>>(`api/mass_media_stories${queryParams}`)
  },
  async getCurrentCommunityNews(payload: { id: string }) {
    return await instance.get<ResponseType<SingleNewsResponseType>>(`api/stories?type_story=community&id=${payload.id}`)
  },
}
