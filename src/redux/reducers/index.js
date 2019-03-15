import { combineReducers } from 'redux';

// Reducers
import authReducer from 'redux/reducers/auth';
import messageReducer from 'redux/reducers/message';

// Combine all application reducers into root reducer
export default combineReducers({
    auth: authReducer,
    message: messageReducer
});
