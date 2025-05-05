import { combineReducers } from 'redux';

// Import your reducers here
import userReducer from './userReducer';
import authReducer from './authReducer'; // example for authentication reducer

const rootReducer = combineReducers({
    user: userReducer,
    auth: authReducer, // example reducer for authentication state
});

export default rootReducer;
