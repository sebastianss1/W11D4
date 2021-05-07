import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import { signUp, login, logout } from './util/session_api_util'
import configureStore from './store/store'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    const store = configureStore();
    debugger
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.login = login;
    window.signUp = signUp;
    window.logout = logout;
    ReactDOM.render(<Root store={store} />, root);
});

