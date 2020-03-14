import React from "react";
import {Switch, Route} from 'react-router-dom';
import Header from "./component/Header.jsx";
import LoginPage from "./component/LoginPage.jsx";
import MainPage from "./component/MainPage.jsx";
import {connect} from "react-redux";

class App extends React.Component {

    render() {
        const history = this.props.history;
        if (window.location.pathname==="/main" && this.props.token==="")
            history.replace("/");
        return <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route path='/main' component={MainPage}/>
            </Switch>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        token: state.get("token")
    }
}

export default connect(mapStateToProps)(App);