import {useDispatch} from 'react-redux'
import {AppDispatchType} from "../store/store";
import {ActionCreatorsMapObject, bindActionCreators} from 'redux'
import {useMemo} from 'react'
import {RequestStatusType} from "../features/App/app-reducer";
import {appActions} from "../features/App";
import {ThunkAPIType} from "./error-utils";

export const useAppDispatch = () => useDispatch<AppDispatchType>()

export function useActions<T extends ActionCreatorsMapObject>(actions: T) {
    const dispatch = useAppDispatch()
    return useMemo(() => bindActionCreators(actions, dispatch), [])
}

export const handleSetAppStatus = (status: RequestStatusType, thunkAPI: ThunkAPIType) => thunkAPI.dispatch(appActions.setAppStatus({status}))
