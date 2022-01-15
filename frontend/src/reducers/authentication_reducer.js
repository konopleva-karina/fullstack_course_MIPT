import { userActionConstants, globalActionConstants } from '../constants';

const initialState = {
    loggingIn: false,
    loggedIn: false,
    user: {},
};

export function authentication(state = initialState, action) {
    switch (action.type) {
        case userActionConstants.LOGIN_REQUEST:
            return { ...state, loggingIn: true };

        case userActionConstants.LOGIN_FINISHED:
            return { ...state, loggingIn: false };

        case userActionConstants.CURRENT_USER_INFO_SUCCESS: {
            const userLoggedIn = action.user.username !== 'AnonymousUser';
            return { ...state, user: action.user, loggedIn: userLoggedIn };
        }

        case globalActionConstants.CLEAR_STATE:
            return initialState;

        default:
            return state;
    }
}