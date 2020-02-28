import React from "react";
import {connect} from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import mapDispatchToProps from './actions.js';
import Header from "./component/Header.jsx";
import LoginPage from "./component/LoginPage.jsx";
import MainPage from "./component/MainPage.jsx";

class App extends React.Component {

    render() {
        console.log("app props");
        console.log(this.props);
        return <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route path='/main' render={(props) => (<MainPage {... this.props} />)}/>
            </Switch>
        </div>
    }
}

function mapStateToProps(state) {
    return {
        // points: state.get("points"),
        // radius: state.get("radius")
        points: state.points,
        radius: state.radius,
        error: state.error
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)