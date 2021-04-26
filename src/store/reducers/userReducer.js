import { SET_USER_LOADING_STATUS, SET_LOGGED_IN } from '../actions/userActions';


const initialState = {
    loggedIn: 'not',
    loading: null,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_LOADING_STATUS: {
            return {
                ...state,
                loading: action.payload
            }
        }
        case SET_LOGGED_IN: {
            return {
                loading: false,
                loggedIn: action.payload,
            }
        }
        default:
            return state;
    }
};
