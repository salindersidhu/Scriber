import { NEW_AUTH, DELETE_AUTH } from 'redux/actions/types';

const initialState = {
    isAuth: false,
    token: null
};

export default function(state=initialState, action) {
    switch(action.type) {
    case NEW_AUTH:
        return { ...state, ...action.payload };
    case DELETE_AUTH:
        return { ...state, ...action.payload };
    default:
        return state;
    }
}
