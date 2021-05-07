import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_actions';


const sessionsErrorReducer = (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, { errors: [] })
        case RECEIVE_ERRORS:
            return Object.assign({}, { errors: action.errors })
        default:
            return state;
    }
};

export default sessionsErrorReducer;