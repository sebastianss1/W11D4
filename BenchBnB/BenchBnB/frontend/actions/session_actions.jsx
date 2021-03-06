import { signUp, login, logout } from '../util/session_api_util';
export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS'

const receiveCurrentUser = user => { return {
    type: RECEIVE_CURRENT_USER,
    user
}
}

const logoutCurrentUser = () => { return {
    type: LOGOUT_CURRENT_USER
}
}

const receiveErrors = (errors) => { return {
    type: RECEIVE_ERRORS,
    errors
} 
} 

const signUpUser = formUser => dispatch => signUp(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

const loginUser = formUser => dispatch => login(formUser)
    .then(user => dispatch(receiveCurrentUser(user)));

const logoutUser = () => dispatch => logout()
    .then(() => dispatch(logoutCurrentUser()));
