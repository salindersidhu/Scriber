import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

// Root Reducer
import rootReducer from 'redux/reducers';

// Initial State
const initialState = {};

// Enhancers
const composeEnhancers =
    typeof window === 'object' && 
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// Store
const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);

export default store;
