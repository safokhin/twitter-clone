import produce, {Draft} from 'immer';
import {LoadingState, UserState} from "./contracts/state";
import {UserActions} from "./actionCreators";
import {UserActionsType} from "./contracts/actionTypes";

const initialUserState: UserState = {
    data: undefined,
    status: LoadingState.NEVER
}

export const userReducer = produce((draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
        case UserActionsType.SET_USER_DATA: {
            draft.data = action.payload;
            draft.status = LoadingState.SUCCESS;
            break;
        }
        case UserActionsType.SET_LOADING_STATE: {
            draft.status = action.payload;
            break;
        }
        case UserActionsType.SIGN_OUT: {
            draft.status = LoadingState.LOADED;
            draft.data = undefined;
            break;
        }

        default: break;
    }

}, initialUserState)

