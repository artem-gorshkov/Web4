import React from "react";
import Input from "./Input.jsx";
import { Base64 } from 'js-base64';

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateWithMessage = this.updateWithMessage.bind(this);
        this.state = {
            username: '',
            password: '',
            message: ''
        };
    }

    submit(event) {
        event.preventDefault();
        if (!this.validation(this.state.username, this.state.password)) return false;
        const link = '/main'; //URL of main page
        this.sendUser("/api/login")
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    this.props.setToken(response.text());
                    this.props.history.push(link);
                } else if (response.status === 400) {
                    this.updateWithMessage("Пользователь не найден");
                } else throw Error(response.statusText);
            }).catch(error => console.log(error));
    }

    sendUser(url) {
        document.forms[1].reset();
        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + Base64.encode(this.state.username + ":" + this.state.password));
        return fetch(url, {
            method: "GET",
            headers: headers
        })
    }

    validation(username, password) {
        if (username === '' || password === '') {
            this.updateWithMessage('Заполните все необходимые поля.');
            return false;
        } else if (username.length < 6 || password.length < 6) {
            this.updateWithMessage('Длина логина и пароля должна быть больше 6 символов');
            return false;
        }
        return true;
    }

    updateWithMessage(msg) {
        this.setState({
            username: '',
            password: '',
            passwordAgain: '',
            message: msg
        });
    }

    handleChange(event) {
        this.setState({
            [event.target.name]:
            event.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="message">{this.state.message}</div>
                <form  method="post" onSubmit={this.submit}>
                    <Input id='username' label='Логин:' inputType='text'
                           value={this.state.username} onChange={this.handleChange}/>
                    <Input id='password' label='Пароль:' inputType='password'
                           value={this.state.password} onChange={this.handleChange}/>
                    <button type='submit'>Войти</button>
                </form>
            </div>);
    }
}