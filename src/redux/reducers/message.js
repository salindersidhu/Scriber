import { NEW_MESSAGE, TOGGLE_MESSAGE } from 'redux/actions/types';

const initialState = {
    text: '',
    title: '',
    color: '',
    isActive: false
};

export default function(state = initialState, action) {
    switch(action.type) {
    // Show a new message modal with custom text, title and color.
    case NEW_MESSAGE:
        return { ...state, ...action.payload };
    // Toggle show or hide message modal.
    case TOGGLE_MESSAGE:
        return { ...state, isActive: !state.isActive };
    default:
        return state;
    }
}
