import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from 'react-redux';
import reducer from './reducer';
import App from './component/App.jsx';

const store = createStore(reducer);

ReactDom.render((
    <Provider store={store}>
        <App/>
    </Provider>
), document.querySelector('#root'),
    () => {
        console.log("App created")});