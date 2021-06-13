// interface
import {Action} from "redux";
import {LoadingState, TweetState} from "./state";
import {TweetActionsType} from "../actionCreators";

export interface SetTweetDataActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_DATA;
    payload: TweetState['data'];
}

export interface FetchDataActionActionInterface extends Action<TweetActionsType> {
    type: TweetActionsType.FETCH_DATA;
    payload: string;
}

export interface SetDataActionLoadingStateInterface extends Action<TweetActionsType> {
    type: TweetActionsType.SET_LOADING_DATA;
    payload: LoadingState;
}
