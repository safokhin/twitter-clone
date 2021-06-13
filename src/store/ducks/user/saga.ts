import {call, put, takeLatest} from 'redux-saga/effects'
import {AuthApi} from "../../../services/api/authApi";
import {FetchSignInActionInterface, FetchSignUpActionInterface, UserActionsType} from "./contracts/actionTypes";
import {setLoadingStatus, setUserData} from "./actionCreators";
import {LoadingState} from "./contracts/state";

export function* fetchSignInRequest({ payload }: FetchSignInActionInterface) {
    try {
        yield put(setLoadingStatus(LoadingState.LOADING));
        // @ts-ignore
        const { data } = yield call(AuthApi.signIn, payload);
        yield put(setUserData(data));
        window.localStorage.setItem('token', data.token)
    } catch (error) {
        yield put(setLoadingStatus(LoadingState.ERROR));
    }
}

export function* fetchUserDataRequest() {
    try {
        yield put(setLoadingStatus(LoadingState.LOADING));
        // @ts-ignore
        const { data } = yield call(AuthApi.getMe);
        yield put(setUserData(data));
    } catch (error) {
        yield put(setLoadingStatus(LoadingState.ERROR));
    }
}

export function* fetchSignUpRequest({ payload }: FetchSignUpActionInterface) {
    try {
        yield put(setLoadingStatus(LoadingState.LOADING));
        // @ts-ignore
        yield call(AuthApi.signUp, payload);
        yield put(setLoadingStatus(LoadingState.SUCCESS));
    } catch (error) {
        yield put(setLoadingStatus(LoadingState.ERROR));
    }
}

export function* userSaga() {
    yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest);
    yield takeLatest(UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest);
    yield takeLatest(UserActionsType.FETCH_USER_DATA, fetchUserDataRequest);
}
