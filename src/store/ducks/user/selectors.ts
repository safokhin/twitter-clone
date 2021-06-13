import {LoadingState, UserState} from "./contracts/state";
import {RootState} from "../../store";

export const selectUserState = (state: RootState): UserState => state.user;

export const selectUserStatus = (state: RootState): UserState['status'] => selectUserState(state).status;

export const selectUserData = (state: RootState): UserState['data'] => selectUserState(state).data;

export const selectUserIsLoading = (state: RootState): boolean => selectUserState(state).status === LoadingState.LOADING;
export const selectUserIsLoaded = (state: RootState): boolean => selectUserState(state).status === LoadingState.LOADED;

export const selectIsAuth = (state: RootState): boolean => !!selectUserState(state).data;
