import {User} from "../../user/contracts/state";

export enum LoadingState {
    LOADED = 'LOADED',
    LOADING = 'LOADING',
    ERROR = 'ERROR',
    NEVER = 'NEVER',
}

export interface UsersState {
    items: User[];
    loadingState: LoadingState;
}
