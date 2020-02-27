import React from "react";
import Input from "./Input.jsx";
import LoginForm from "./LoginForm.jsx";

export default class RegistrationForm extends LoginForm {

    constructor(props) {
        super(props);
        this.state = {
            passwordConfirm: '',
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

        if (this.state.password !== this.state.passwordConfirm) {
            this.updateWithMessage('Пароли различаются.');
            event.preventDefault();
            return false;
        }
        return true;
    }

    updateWithMessage(msg) {
        this.setState({
            username: this.state.username,
            password: '',
            passwordConfirm: '',
            message: msg
        });
    }

    render() {
        const registration = "/registration";
        return (
            <div>
                <div className="message">{this.state.message}</div>
                <form action={registration} method="post" onSubmit={this.submit}>
                    <Input id='username' label='Логин:' inputType='text'
                           value={this.state.username} onChange={this.handleChange}/>
                    <Input id='password' label='Пароль:' inputType='password'
                           value={this.state.password} onChange={this.handleChange}/>
                    <Input id='passwordConfirm' label='Пароль еше раз:' inputType='password'
                           value={this.state.passwordConfirm} onChange={this.handleChange}/>
                    <button type='submit'>Регистрация</button>
                </form>

            </div>);
    }
}