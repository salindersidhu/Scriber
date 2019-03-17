import { NEW_AUTH, DELETE_AUTH } from 'redux/actions/types';

export const newAuth = (data) => dispatch => {
    dispatch({
        type: NEW_AUTH,
        payload: {
            isAuth: true,
            token: data
        }
    });
};

export const deleteAuth = () => dispatch => {
    dispatch({
        type: DELETE_AUTH,
        payload: {
            isAuth: false,
            token: null
        }
    });
};
