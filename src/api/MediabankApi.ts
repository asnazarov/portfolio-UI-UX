import dayjs from 'dayjs';
import { MediaAlbumsParamsType } from '../features/Mediabank/types';

import { instance } from './API';

function formatYear(year) {
  return dayjs(`${year}`).locale('ru').format('YYYY-MM-DD');
}

export const MediabankApi = {
  async getMediaAlbums({
    page = 1,
    project,
    itemsPerPage = 10,
    tags = [],
    year,
    beforeYear,
    regionId,
    contentType = 'all',
    title,
    simplesearch,
  }: Partial<MediaAlbumsParamsType> = {}) {
    const tagsQuery = tags.length
      ? tags.reduce((query, tagId) => {
          return `${query}&tag[]=/api/tags/${tagId}`;
        }, '')
      : '';
    const pageQuery = page ? `&page=${page}` : '';
    const regionQuery = regionId ? `&project.region=/api/regions/${regionId}` : '';
    const yearQuery = year
      ? `&date[after]=${formatYear(year)}&date[before]=${formatYear(year + 1)}`
      : '';
    const projectQuery = project ? `&project=${project}` : '';
    const itemsPerPageQuery = itemsPerPage ? `&itemsPerPage=${itemsPerPage}` : '';
    const search = simplesearch ? `&simplesearch=${simplesearch}` : '';
    const contentTypeQuery = contentType !== 'all' ? `&mediaObjects.fileType=${contentType}` : '';
    const searchTitle = title ? `&title=${title}` : '';
    const queryParams = `${tagsQuery}${yearQuery}${pageQuery}${search}${itemsPerPageQuery}${regionQuery}${contentTypeQuery}${yearQuery}${searchTitle}${projectQuery}`;
    return await instance.get(`api/media_albums?${queryParams}`);
  },
  async getMediaAlbum({ id }: { id: number }) {
    return await instance.get(`api/media_albums/${id}`);
  },
  async getMediaTags() {
    return await instance.get('api/tags');
  },
};
