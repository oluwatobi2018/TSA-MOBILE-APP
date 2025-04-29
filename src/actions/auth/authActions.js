import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../../types/authTypes';

// authActions.js


// Action to handle login success
export const loginSuccess = (userData) => {
    return {
        type: LOGIN_SUCCESS,
        payload: userData,
    };
};

// Action to handle login failure
export const loginFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error,
    };
};

// Action to handle logout
export const logout = () => {
    return {
        type: LOGOUT,
    };
};
