import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from 'redux/reducers';

// Initial State
const initialState = {};

// Middleware
const middlware = [thunk];

// Store
const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middlware)
    )
);

export default store;
