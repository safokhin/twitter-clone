import {UserState} from "./contracts/state";
import {
    FetchSignInActionInterface, FetchSignUpActionInterface, FetchUserDataActionInterface,
    SetUserDataActionInterface,
    SetUserLoadingStateActionInterface, SignOutActionInterface,
    UserActionsType
} from "./contracts/actionTypes";
import {LoginFormProps} from "../../../components/modal/SingInPopup";
import {RegPopupProps} from "../../../components/modal/RegPopup";

export const setUserData = (payload: UserState['data']): SetUserDataActionInterface => ({
    type: UserActionsType.SET_USER_DATA,
    payload,
})

export const fetchSignIn = (payload: LoginFormProps): FetchSignInActionInterface => ({
    type: UserActionsType.FETCH_SIGN_IN,
    payload,
})

export const signOut = (): SignOutActionInterface => ({
    type: UserActionsType.SIGN_OUT,
})

export const fetchUserData = (): FetchUserDataActionInterface => ({
    type: UserActionsType.FETCH_USER_DATA,
})

export const setLoadingStatus = (payload: UserState['status']): SetUserLoadingStateActionInterface => ({
    type: UserActionsType.SET_LOADING_STATE,
    payload,
})

export const fetchSignUp = (payload: RegPopupProps): FetchSignUpActionInterface => ({
    type: UserActionsType.FETCH_SIGN_UP,
    payload,
})

export type UserActions = SetUserDataActionInterface
  | SetUserLoadingStateActionInterface
  | FetchUserDataActionInterface
  | SignOutActionInterface;
