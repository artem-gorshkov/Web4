import React from "react";
import belle from "belle";

export default class LogoutButton extends React.Component {
    render() {
        const Button = belle.Button;
        return <form onSubmit={(event) => {
            event.preventDefault();
            this.props.logout(this.props.token, this.props.username);
            this.props.history.replace("/");
        }}>
            <Button className="button" type="submit" primary>Выход</Button>
        </form>
    }
}