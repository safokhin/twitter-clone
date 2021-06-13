import React from 'react';
import {SignIn} from "./pages/SignIn";
import { Home } from "./pages/home";
import {Route, Switch, useHistory} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserData} from "./store/ducks/user/actionCreators";
import {selectIsAuth, selectUserStatus} from "./store/ducks/user/selectors";
import {LoadingState} from "./store/ducks/user/contracts/state";
import {useHomeStyles} from "./pages/home/theme";
import TwitterIcon from "@material-ui/icons/Twitter";
import { User } from './pages/User';
import {FullTweet} from "./components/FullTweet";


// TODO
// Сделать нормальное отображение popup
// Убрать костыли в popups (regs, auth)
//  <Route path="/home/tweet/:id" component={FullTweet} />  Можно переставить в App.tsx и будет работать
function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useHomeStyles();
  const isAuth = useSelector(selectIsAuth);
  const loadingStatus = useSelector(selectUserStatus);
  const isReady = loadingStatus !== LoadingState.NEVER && loadingStatus !== LoadingState.LOADING;

  React.useEffect(() => {
    dispatch(fetchUserData());
  }, [])

  React.useEffect(() => {
    if (!isAuth && isReady) {
      history.push('/signin');
    } else if(history.location.pathname === '') {
      history.push('/home');
    }
  }, [isReady, isAuth]);

  if (!isReady) {
    return (
      <div className={classes.centered}>
        <TwitterIcon style={{ width: 80, height: 80, color: '#1DA1F2' }} />
      </div>
    )
  }

  return (
    <div className="App">
      <Switch>
        <Route path="/signin" component={SignIn} />
        <Route exact path="/home" component={Home} />
        <Route path="/user/:name" component={User} />
        {/*<Route exact path="/user/activate/:hash" component={ActivatePage} />*/}
      </Switch>
    </div>
  );
}

export default App;
