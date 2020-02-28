import React from "react";
import LoginForm from "./loginPage/LoginForm.jsx";
import RegistrationForm from "./loginPage/RegistrationForm.jsx";

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
        return (
            <div>
                <div id="time"/>
                Войти:
                <LoginForm {...this.props}/>
                Регистрация:
                <RegistrationForm {...this.props}/>
            </div>
        )

    }
}