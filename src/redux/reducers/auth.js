import { NEW_AUTH } from 'redux/actions/types';

const initialState = {
    token: ''
};

export default function(state=initialState, action) {
    switch(action.type) {
    default:
        return state;
    }
}
