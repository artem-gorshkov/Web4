import React from "react";
import ReactDom from "react-dom";
import {Router} from 'react-router-dom';
import {createBrowserHistory} from "history";
import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise';
import reducer from "./reducer.js";
import {Provider} from "react-redux";
import App from "./App.jsx";

const store = createStore(reducer, applyMiddleware(promiseMiddleware));
const history = createBrowserHistory();

ReactDom.render(
    <Provider store={store}>
        <Router history={history}>
            <App history={history}/>
        </Router>
    </Provider>, document.querySelector('#root'));