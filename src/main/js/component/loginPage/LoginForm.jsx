import React from "react";
import Input from "./Input.jsx";
import belle from "belle";

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
        const link = '/main';
        this.sendUser("/api/login", {method: "POST"})
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else throw Error("No such user");
            }).then(token => {
            this.props.setToken(token, this.state.username);
            this.props.history.replace(link);
        }).catch(error => {
            console.log(error);
            this.updateWithMessage("Пользователь не найден");
        });
        document.forms[0].reset();
    }

    sendUser(url) {
        const user = {'username': this.state.username, 'password': this.state.password};
        return fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
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
        const Button = belle.Button;
        return <div id="lform">
            <div className="message">{this.state.message}</div>
            <form onSubmit={this.submit}>
                <Input id='username' label='Логин:' inputType='text'
                       value={this.state.username} onChange={this.handleChange}/>
                <Input id='password' label='Пароль:' inputType='password'
                       value={this.state.password} onChange={this.handleChange}/>
                <Button type="submit">Вход</Button>
            </form>
        </div>;
    }
}