import React from "react";
import {connect} from 'react-redux';
import mapDispatchToProps from '../actions.js';
import { Switch, Route } from 'react-router-dom'
import Header from "./Header.jsx";
import LoginPage from "./LoginPage.jsx";
import MainPage from "./MainPage";

class App extends React.Component {

    render() {
        return <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route path='/main' render={(props) => (<MainPage {...props}/>)}/>
            </Switch>
        </div>
    }

    componentDidMount() {
        this.props.setPoints();
    }
}

function mapStateToProps(state) {
    return {
        points: state.get("points"),
        radius: state.get("radius")
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)