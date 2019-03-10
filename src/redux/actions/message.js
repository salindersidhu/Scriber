import { NEW_MESSAGE, TOGGLE_MESSAGE } from 'redux/actions/types';

export const showError = (text) => dispatch => {
    dispatch({
        type: NEW_MESSAGE,
        payload: {
            text,
            title: 'Uh Oh',
            color: 'danger',
            isActive: true
        }
    });
};

export const showMessage = (text) => dispatch => {
    dispatch({
        type: NEW_MESSAGE,
        payload: {
            text,
            title: 'Notification',
            color: 'success',
            isActive: true
        }
    });
};

export const toggleMessage = () => dispatch => {
    dispatch({
        type: TOGGLE_MESSAGE
    });
};
