import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import promiseMiddleware from 'redux-promise';
import reducer from "./reducer.js";
import {Provider} from "react-redux";
import App from "./App.jsx";

const store = createStore(reducer, applyMiddleware(promiseMiddleware));

ReactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>, document.querySelector('#root'));