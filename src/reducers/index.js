import { combineReducers } from 'redux';

// Reducers
import messageReducer from 'reducers/message';

// Combine all application reducers into root reducer
export default combineReducers({
    message: messageReducer
});
