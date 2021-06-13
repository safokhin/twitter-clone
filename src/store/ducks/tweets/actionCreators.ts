import {AddFormState, LoadingState, Tweet, TweetsState} from "./contracts/state";

import {
    AddTweetActionInterface,
    FetchAddTweetActionInterface,
    FetchTweetsActionInterface, RemoveTweetActionInterface, SetAddFormLoadingStateInterface,
    SetTweetsActionInterface,
    SetTweetsLoadingStateInterface
} from "./contracts/actionTypes";

export enum TweetsActionsType {
    SET_TWEETS= 'tweets/SET_TWEETS',
    FETCH_TWEETS= 'tweets/FETCH_TWEETS',
    SET_LOADING_STATE= 'tweets/SET_LOADING_STATE',
    FETCH_ADD_TWEET= 'tweets/FETCH_ADD_TWEET',
    ADD_TWEET= 'tweets/ADD_TWEET',
    REMOVE_TWEET= 'tweets/REMOVE_TWEET',
    SET_ADD_FORM_STATE= 'tweets/SET_ADD_FORM_STATE',
}

// actions
export const fetchAddTweet = (payload: {textTweet: string, images: string[]}): FetchAddTweetActionInterface => ({
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
})

export const addTweet = (payload: Tweet): AddTweetActionInterface => ({
    type: TweetsActionsType.ADD_TWEET,
    payload,
})

export const removeTweet = (payload: string): RemoveTweetActionInterface => ({
    type: TweetsActionsType.REMOVE_TWEET,
    payload,
})

export const setTweets = (payload: TweetsState['items']): SetTweetsActionInterface => ({
    type: TweetsActionsType.SET_TWEETS,
    payload,
})

export const fetchTweets = (): FetchTweetsActionInterface => ({
    type: TweetsActionsType.FETCH_TWEETS,
})

export const setTweetsLoadingState = (payload: LoadingState): SetTweetsLoadingStateInterface => ({
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
})

export const setAddFormState = (payload: AddFormState): SetAddFormLoadingStateInterface => ({ // SetAddFormLoadingStateInterface
    type: TweetsActionsType.SET_ADD_FORM_STATE,
    payload,
})

export type TweetsActions = SetTweetsActionInterface
    | FetchTweetsActionInterface
    | SetTweetsLoadingStateInterface
    | FetchAddTweetActionInterface
    | AddTweetActionInterface
    | SetAddFormLoadingStateInterface
    | RemoveTweetActionInterface;
