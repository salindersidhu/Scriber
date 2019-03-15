import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from 'redux/reducers';

// Initial State
const initialState = {};

// Middleware
const middlware = [thunk];

// Store
const composeEnhancers =
    typeof window === 'object' && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middlware)
    )
);

export default store;
