import React from "react";
import LoginForm from "./loginPage/LoginForm.jsx";
import RegistrationForm from "./loginPage/RegistrationForm.jsx";
import {connect} from "react-redux";

export default class LoginPage extends React.Component {

    goTime() {
        let clock = document.getElementById("time");
        clock.innerHTML = new Date().toLocaleTimeString();
        window.setInterval(function () {
            clock.innerHTML = new Date().toLocaleTimeString();
        }, 5000);
    }

    componentDidMount() {
        this.goTime();
    }

    render() {
        const LoginForm1 = connect(null, {setToken})(LoginForm);
        return (
            <div>
                <div id="time"/>
                <b>Войти:</b>
                <LoginForm1 history={this.props.history}/>
                <b>Регистрация:</b>
                <RegistrationForm/>
            </div>
        )

    }
}

const setToken = function (token, username) {
    return {
        type: "SET_TOKEN",
        token,
        username
    }
};