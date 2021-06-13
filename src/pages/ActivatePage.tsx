import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUserData, setLoadingStatus, setUserData} from "../store/ducks/user/actionCreators";
import {LoadingState} from "../store/ducks/user/contracts/state";
import {AuthApi} from "../services/api/authApi";
import {useHistory} from "react-router-dom";

export const ActivatePage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  React.useEffect(() => {
    dispatch(setLoadingStatus(LoadingState.NEVER));
    const hash = window.location.pathname.split('/').pop();
    if (hash) {
      AuthApi.activate(hash).then(({ data }) => {
        window.localStorage.setItem('token', data.token)
        dispatch(setUserData(data));
        history.push('/home');
      }).catch(() => {
        dispatch(setLoadingStatus(LoadingState.LOADED));
      });
    }
  }, [dispatch, history]);

  return null;
}
