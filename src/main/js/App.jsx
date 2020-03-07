import React from "react";
import { Switch, Route } from 'react-router-dom';
import Header from "./component/Header.jsx";
import LoginPage from "./component/LoginPage.jsx";
import MainPage from "./component/MainPage.jsx";

export default class App extends React.Component {

    render() {
        return <div>
            <Header/>
            <Switch>
                <Route exact path='/' component={LoginPage}/>
                <Route path='/main' component={MainPage}/>
            </Switch>
        </div>
    }
}