import { instance, jwtConfig } from './API';
import { ResponseType } from '../types/ResonseType';
import ApproveEmailThroughAuth from '../../pages/auth/register-confirm/[token]';
import { FormAuthType, LoginDataResponseType } from '../features/Auth/type';

export const LoginApi = {
 async Login(payload: FormAuthType) {
    return await instance
      .post<ResponseType<LoginDataResponseType>>('authentication_token', payload)
      .catch((err) => err.response.data);
  },

  async Logout() {
    return await instance.delete<ResponseType>('url');
  },

  async AuthMe() {
    return await instance.get<ResponseType>('/api/login_check', jwtConfig());
  },

  async Registration(param: FormAuthType) {
    return await instance.post<ResponseType>('/api/users', param);
  },

  async EmailVerification(payload: { token: string }) {
    return await instance.post<ResponseType>('/verify/email', { token: payload.token });
  },

  async ResetPassword(email) {
    return await instance.post<ResponseType>('/api/user/restore_password/send_mail', { email });
  },

  async CheckTokenResetPassword(token) {
    return await instance.post<ResponseType>('/api/user/restore_password/check_token', { token });
  },

  async CheckTokenApproveEmail(token) {
    return await instance.post<ResponseType>('/api/user/register_confirm', { token });
  },

  async CreateNewPassword(payload) {
    return await instance.post<ResponseType>('/api/user/restore_password/change_password', {
      token: payload.token,
      password: payload.password,
      repeat_password: payload.repeat_password,
    });
  },

  async daDataAddress(param) {
    const jwt = JSON.parse(localStorage.getItem('jwt'));
    const url = 'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address';
    const token = '8b52004964f5a527545086cdf9d88e4124c0aaa6';
    var options = {
      method: 'POST',
      // mode: "cors",
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token,
      },
      body: JSON.stringify({ query: param }),
    };
    return await fetch(url, options)
      .then((response) => response.text())
      .then((result) => JSON.parse(result))
      .catch((error) => console.log('error', error));
    // return await instance.post<ResponseType>("/api/users", param)
  },
};
