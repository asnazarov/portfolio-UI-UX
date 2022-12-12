import { Action, combineReducers } from 'redux';
import thunkMiddleware, { ThunkAction } from 'redux-thunk';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { FieldErrorType } from '../types/ResonseType';

const reducersList = {
};

const rootReducer = combineReducers(reducersList);
export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().prepend(thunkMiddleware),
});

if (typeof window !== 'undefined') {
  window.store = store;
}
declare global {
  interface Window {
    store: typeof store;
  }
}

export type AppStateType = ReturnType<typeof rootReducer>;

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U }
  ? U
  : never;
export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<
  R,
  AppStateType,
  unknown,
  A
  >;

export type AppDispatchType = typeof store.dispatch;
export type ThunkError = {
  rejectValue: { errors: Array<string>; fieldsErrors?: Array<FieldErrorType> };
};

export const useAppDispatch = () => useDispatch<AppDispatchType>();

export default store;
