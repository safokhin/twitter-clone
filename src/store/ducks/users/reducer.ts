import produce, {Draft} from 'immer';
import {LoadingState, UsersState} from "./contracts/state";
import {UsersActions, UsersActionsType} from "./actionCreators";

const initialUsersState: UsersState = {
    items: [],
    loadingState: LoadingState.NEVER
}

export const usersReducer = produce((draft: Draft<UsersState>, action: UsersActions) => {
    switch (action.type) {
        case UsersActionsType.SET_ITEMS: {
            draft.items = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        }
        case UsersActionsType.FETCH_ITEMS: {
            draft.loadingState = LoadingState.LOADING;
            break;
        }
        default: break;
    }

}, initialUsersState)

