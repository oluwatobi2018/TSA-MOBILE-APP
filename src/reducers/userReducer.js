const initialState = {
    user: null,
    isLoading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_LOGIN_REQUEST':
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case 'USER_LOGIN_SUCCESS':
            return {
                ...state,
                isLoading: false,
                user: action.payload,
            };
        case 'USER_LOGIN_FAILURE':
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case 'USER_LOGOUT':
            return {
                ...state,
                user: null,
            };
        default:
            return state;
    }
};

export default userReducer;
