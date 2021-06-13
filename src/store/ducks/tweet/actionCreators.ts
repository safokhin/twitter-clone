import {LoadingState, TweetState} from "./contracts/state";
import {Action} from "redux";
import {Tweet} from "../tweets/contracts/state";
import {
    FetchDataActionActionInterface,
    SetDataActionLoadingStateInterface,
    SetTweetDataActionInterface
} from "./contracts/actionTypes";

export enum TweetActionsType {
    SET_DATA  = 'tweet/SET_DATA',
    FETCH_DATA = 'tweet/FETCH_DATA',
    SET_LOADING_DATA = 'tweet/SET_LOADING_DATA',
}

// actions
export const setTweetData = (payload: TweetState['data']): SetTweetDataActionInterface => ({
    type: TweetActionsType.SET_DATA,
    payload,
})

export const fetchTweetData = (payload: string): FetchDataActionActionInterface => ({
    type: TweetActionsType.FETCH_DATA,
    payload,
})

export const setTweetLoadingState = (payload: LoadingState): SetDataActionLoadingStateInterface => ({
    type: TweetActionsType.SET_LOADING_DATA,
    payload,
})

export type TweetActions = SetTweetDataActionInterface | FetchDataActionActionInterface | SetDataActionLoadingStateInterface;
