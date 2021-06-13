import {call, put, takeEvery} from 'redux-saga/effects'
import {LoadingState} from "./contracts/state";
import {
    setTweetData,
    setTweetLoadingState,
    TweetActionsType
} from "./actionCreators";
import {TweetsApi} from "../../../services/api/tweetsApi";
import {FetchDataActionActionInterface} from "./contracts/actionTypes";

export function* fetchTweetRequest({payload: tweetId}: FetchDataActionActionInterface) {
    try {
        // @ts-ignorez
        const data = yield call(TweetsApi.fetchTweetData, tweetId);
        yield put(setTweetData(data));
    } catch (error) {
        yield put(setTweetLoadingState(LoadingState.ERROR))
    }
}

export function* tweetSaga() {
    yield takeEvery(TweetActionsType.FETCH_DATA, fetchTweetRequest)
}
