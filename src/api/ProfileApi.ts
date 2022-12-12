import { patchInstance, instance, jwtConfig } from './API';
import { ResponseType } from '../types/ResonseType';
import { changeProfileInfoType, userProfileType } from '../features/Profile/types';
import UnsubscribeContainer from '../features/Unsubscribe/UnsubscribeContainer';

export const ProfileApi = {
  async GetUserData(id: string) {
    return await instance.get<ResponseType<userProfileType>>(`/api/users/${id}`);
  },

  async ChangeProfileInfo(payload: changeProfileInfoType) {
    return await patchInstance.patch<ResponseType<userProfileType>>(
      `/api/users/${payload.id}`,
      payload,
      jwtConfig()
    );
  },

  async Subscribe(payload: { email: string }) {
    const basePayload = {
      email: payload.email,
      isEnabled: true,
    };
    return await instance.post(`/api/subscriptions`, basePayload);
  },
  async HashCheck(payload: { token: string }) {
    return await instance.post(`/api/user/subscribe/status`, payload);
  },
  async Unsubscribe(payload: { token: string }) {
    return await instance.post(`/api/user/subscribe/unsubscribe`, payload);
  },
};
