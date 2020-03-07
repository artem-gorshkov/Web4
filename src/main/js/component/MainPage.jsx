import React from "react";
import {connect} from 'react-redux';
import mapDispatchToProps from '../actions.js';
import Plot from "./mainPage/Plot.jsx";
import InputForm from "./mainPage/InputForm.jsx";
import Table from "./mainPage/Table.jsx";
import LogoutButton from "./mainPage/LogoutButton.jsx";

class MainPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.setPoints(this.props.token, this.props.username);
    }

    render() {
        return <div>
            <LogoutButton token={this.props.token} username={this.props.username}
                          history={this.props.history} logout={this.props.logout}/>
            <Plot radius={this.props.radius} points={this.props.points}
                  setError={this.props.setError} addPoint={this.props.addPoint}
                  token={this.props.token} username={this.props.username}/>
            <div className="error">{this.props.error}</div>
            <InputForm setError={this.props.setError} addPoint={this.props.addPoint}
                       changeRadius={this.props.changeRadius}
                       token={this.props.token} username={this.props.username}
                       radius={this.props.radius}/>
            <Table points={this.props.points}/>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        points: state.get("points"),
        radius: state.get("radius"),
        error: state.get("error"),
        token: state.get("token"),
        username: state.get("username")
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
