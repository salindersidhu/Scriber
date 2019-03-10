import { combineReducers } from 'redux';

// Reducers
import messageReducer from 'redux/reducers/message';

// Combine all application reducers into root reducer
export default combineReducers({
    message: messageReducer
});
