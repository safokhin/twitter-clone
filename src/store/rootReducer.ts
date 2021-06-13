import {combineReducers} from 'redux';
import {tweetsReducer} from "./ducks/tweets/reducer";
import {tagsReducer} from "./ducks/tags/reducer";
import {tweetReducer} from "./ducks/tweet/reducer";
import {userReducer} from "./ducks/user/reducer";
import {usersReducer} from "./ducks/users/reducer";

export const rootReducer = combineReducers({
    tweets: tweetsReducer,
    tags: tagsReducer,
    tweet: tweetReducer,
    user: userReducer,
    users: usersReducer,
})
