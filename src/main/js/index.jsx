import React from "react";
import ReactDom from "react-dom";
import LoginForm from "./component/LoginForm.jsx";
import Header from "./component/Header.jsx";
import RegistrationForm from "./component/RegistrationForm.jsx";

class LoginPage extends React.Component {

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
                <Header/>
                <div id="time"/>
                <LoginForm/>
                <RegistrationForm/>
            </div>
        )

    }
}

ReactDom.render(<LoginPage/>, document.getElementById('root'), () => {
    console.log("App created")
});