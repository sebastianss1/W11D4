import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';


export const sessionsErrorReducer = (state = {}, action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { errors: [] })
        case RECEIVE_SESSION_ERRORS:
            return Object.assign({}, { errors: action.errors })
        default:
            return state;
    }
};