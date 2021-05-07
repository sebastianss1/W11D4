import React from "react";
import ReactDOM from "react-dom";
import Root from './components/root';
import { signUp, login, logout } from './util/session_api_util'

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    window.login = login;
    window.signUp = signUp;
    window.logout = logout;
    ReactDOM.render(<Root />, root);
});