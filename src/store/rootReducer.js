import { combineReducers } from 'redux';
import { postsReducer } from './reducers/postsReducer';
import { userReducer } from './reducers/userReducer';

export const rootReducer = combineReducers({
    posts: postsReducer,
    user: userReducer,
});
