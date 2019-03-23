import { SET_AUTH, UNSET_AUTH } from 'redux/actions/types';

const initialState = {
    token: null
};

export default function(state=initialState, action) {
    switch(action.type) {
    case SET_AUTH:
        return { ...state, ...action.payload };
    case UNSET_AUTH:
        return { ...state, token : null };
    default:
        return state;
    }
}
