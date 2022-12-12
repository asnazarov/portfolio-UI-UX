import { ResponseType } from '../types/ResonseType';
import { AxiosError } from 'axios';
import { appActions } from '../features/App';
import { Dispatch } from 'redux';

export type ThunkAPIType = {
  dispatch: Dispatch;
  rejectWithValue: Function;
};

export const handleAsyncServerAppError = <D>(
  data: ResponseType<D>,
  thunkAPI: ThunkAPIType,
  showError = true
) => {
  if (showError) {
    thunkAPI.dispatch(
      appActions.setAppError({
        error: data.message.length ? data.message : 'Some error occurred',
      })
    );
  }
  thunkAPI.dispatch(appActions.setAppStatus({ status: 'failed' }));
  return thunkAPI.rejectWithValue({ errors: data.message, fieldsErrors: data.fieldsErrors });
};

export const handleAsyncServerNetworkError = (
  error: AxiosError,
  thunkAPI: ThunkAPIType,
  showError = true
) => {
  if (showError) {
    thunkAPI.dispatch(
      appActions.setAppError({
        error:
          error.message && error.response.data['hydra:description']
            ? [error.message, '\n', error.response.data['hydra:description']].toString()
            : 'Some error occurred',
      })
    );
  }
  thunkAPI.dispatch(appActions.setAppStatus({ status: 'failed' }));

  return thunkAPI.rejectWithValue({ errors: [error.message], fieldsErrors: undefined });
};
