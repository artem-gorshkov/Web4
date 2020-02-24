import React from "react";

export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(event) {
        if (this.state.username < 8 || this.state.password < 8) {
            this.updateWithMessage('Длина логина и пароля должна быть больше 8 символов');
            return false;
        }

        if (this.state.username === '' || this.state.password === '') {
            this.updateWithMessage('Заполните все необходимые поля.');
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
        const main = document.location.host + "main";
        return (
            <div>
                <div className="message">{this.state.message}</div>
                <form action={main} method="post" onSubmit={this.submit}>
                    <Input id='username' label='Логин:' inputType='text' value={this.state.username}
                           handleChange={(event) => {
                               this.handleChange(event)
                           }}/>
                    <Input id='password' label='Пароль' inputType='password' value={this.state.password}
                           handleChange={(event) => {
                               this.handleChange(event)
                           }}/>
                    <button type='submit'>Войти</button>
                </form>
            </div>);
    }
}

const Input = (props) => (
    <div>
        <label htmlFor={this.props.id} className='label'>{this.props.label}</label>
        <input className='input' name={this.props.id} id={this.props.id}
               type={this.props.inputType} value={this.state.value}
               onChange={this.props.handleChange}/>
    </div>
);
