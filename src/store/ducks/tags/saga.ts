import {call, put, takeEvery} from 'redux-saga/effects'
import {LoadingState} from "./contracts/state";
import {setTags, setTagsLoadingState, TagsActionsType} from "./actionCreators";
import {TagsApi} from "../../../services/api/tagsApi";

export function* fetchTagsRequest() {
    try {
        // @ts-ignorez
        const data = yield call(TagsApi.fetchTags);
        yield put(setTags(data));
    } catch (error) {
        yield put(setTagsLoadingState(LoadingState.ERROR))
    }
}

export function* tagsSaga() {
    yield takeEvery(TagsActionsType.FETCH_ITEMS, fetchTagsRequest)
}
