import { SET_AUTH, UNSET_AUTH } from 'redux/actions/types';

export const setAuth = (data) => dispatch => {
    dispatch({
        type: SET_AUTH,
        payload: {
            token: data
        }
    });
};

export const unsetAuth = () => dispatch => {
    dispatch({
        type: UNSET_AUTH
    });
};
