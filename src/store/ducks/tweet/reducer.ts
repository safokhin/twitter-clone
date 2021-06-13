import produce, {Draft} from 'immer';
import {LoadingState, TweetState} from "./contracts/state";
import {TweetActions, TweetActionsType} from "./actionCreators";

const initialTweetState: TweetState = {
    data: undefined,
    loadingState: LoadingState.NEVER
}

export const tweetReducer = produce((draft: Draft<TweetState>, action: TweetActions) => {
    switch (action.type) {
        case TweetActionsType.SET_DATA: {
            draft.data = action.payload;
            draft.loadingState = LoadingState.LOADED;
            break;
        }
        case TweetActionsType.FETCH_DATA: {
            draft.data = undefined;
            draft.loadingState = LoadingState.LOADING;
            break;
        }
        case TweetActionsType.SET_LOADING_DATA: {
            draft.loadingState = action.payload;
            break;
        }
        default: break;
    }

}, initialTweetState)

