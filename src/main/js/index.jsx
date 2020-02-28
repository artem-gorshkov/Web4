import React from "react";
import ReactDom from "react-dom";
import {BrowserRouter} from 'react-router-dom';
import {createStore} from "redux";
import reducer from "./reducer.js";
import {Provider} from "react-redux";
import App from "./App.jsx";


const store = createStore(reducer);

ReactDom.render((
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>), document.querySelector('#root'));