import { instance, jwtConfig } from './API';
import { ResponseType } from '../types/ResonseType';
import { UploadedFileType } from '../features/Uploader/types';

export const UploaderApi = {
  async uploadFile(photoFile: File) {
    const payload = new FormData();
    payload.append('file', photoFile);
    return await instance.post<ResponseType<UploadedFileType>>(
      `/api/media_objects`,
      payload,
      Object.assign(
        {},
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
        jwtConfig()
      )
    );
  },
};
