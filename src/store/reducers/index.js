import { combineReducers } from 'redux';
import auth from './authReducers';
import user from './userReducer';
import app from './appReducers';


export default combineReducers({
    auth,
    user,
    app,
});
