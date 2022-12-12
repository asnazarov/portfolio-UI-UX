import { instance, jwtConfig } from './API';
import { RegForumType } from '../features/Forum/types';

export const ForumApi = {
  async sendParticipation(payload: RegForumType) {
    return await instance.post('api/forum_registrations', payload);
    // return await instance.post('api/forum_registratis', payload);
  },
};
