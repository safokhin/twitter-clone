import {call, put, takeLatest} from 'redux-saga/effects'
import {
    addTweet,
    setAddFormState,
    setTweets,
    setTweetsLoadingState,
    TweetsActionsType
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {AddFormState, LoadingState} from "./contracts/state";
import {FetchAddTweetActionInterface, RemoveTweetActionInterface} from "./contracts/actionTypes";

export function* fetchTweetsRequest() {
    try {
        const pathname = window.location.pathname;
        const userId = pathname.includes('/user') ? pathname.split('/').pop() : undefined;
        // @ts-ignorez
        const data = yield call(TweetsApi.fetchTweets, userId);
        yield put(setTweets(data));
    } catch (error) {
        yield put(setTweetsLoadingState(LoadingState.ERROR))
    }
}

// Add Tweet
export function* fetchAddTweetRequest({ payload }: FetchAddTweetActionInterface) {
    try {
        console.log('Add tweet')
        // @ts-ignore
        const item = yield call(TweetsApi.addTweet, payload);
        console.log(payload, 12212121);
        yield put(addTweet(item));
    } catch (error) {
        yield put(setAddFormState(AddFormState.ERROR));
    }
}

export function* fetchRemoveTweetRequest({ payload }: RemoveTweetActionInterface) {
    try {
        // @ts-ignore
        yield call(TweetsApi.removeTweet, payload);
    } catch (error) {
        console.log('Ошибка при удалении твита')
    }
}

export function* tweetsSaga() {
    yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
    yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
    yield takeLatest(TweetsActionsType.REMOVE_TWEET, fetchRemoveTweetRequest);
}
