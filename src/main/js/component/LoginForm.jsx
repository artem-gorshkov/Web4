import React from "react";
import Input from "./Input.jsx";

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.updateWithMessage = this.updateWithMessage.bind(this);
        this.state = {
            username: '',
            password: '',
            passwordConfirm: '',
            message: ''
        };
    }

    submit(event) {

        if (this.state.username === '' || this.state.password === '') {
            this.updateWithMessage('Заполните все необходимые поля.');
            event.preventDefault();
            return false;
        }

        if (this.state.username < 6 || this.state.password < 6) {
            this.updateWithMessage('Длина логина и пароля должна быть больше 6 символов');
            event.preventDefault();
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
                {this.state.message != null &&
                <div className="message">{this.state.message}</div>}
                <form action="/" method="post" onSubmit={this.submit}>
                    <Input id='username' label='Логин:' inputType='text'
                           value={this.state.username} onChange={this.handleChange}/>
                    <Input id='password' label='Пароль:' inputType='password'
                           value={this.state.password} onChange={this.handleChange}/>
                    <button type='submit'>Войти</button>
                </form>
            </div>);
    }
}