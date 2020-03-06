import {Base64} from "js-base64";

const changeRadius = function (radius) {
    console.log("changeRadius");
    console.log(radius);
    return {
        type: "CHANGE_RADIUS",
        radius
    }
};

const addPoint = async function (point, token) {
    console.log("addPoint");
    console.log(point);
    const url = "/api/points";
    let data = {};
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + token);
    let response = await fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(point)
    });
    if (response.ok) {
        data = await response.json();
    } else {
        console.log("Ошибка HTTP: " + response.status);
        throw Error(response.statusText);
    }
    console.log("AddAction");
    console.log(data);
    return {
        type: "ADD_POINT",
        data
    }
};

const setPoints = async function (token) {
    console.log("setPoints");
    const url = "/api/points";
    let data = [];
    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + token);
    let response = await fetch(url, {
        headers: headers
    });
    if (response.ok) {
         data = await response.json();
    } else {
        console.log("Ошибка HTTP: " + response.status);
    }
    return {
        type: "SET_POINTS",
        data
    }
};

const setError = function (error) {
    console.log('setError');
    console.log(error);
    return {
        type: "SET_ERROR",
        error
    }
};

const setToken = function (token) {
    console.log('setToken');
    console.log(token);
    return {
        type: "SET_TOKEN",
        token
    }};

export default {changeRadius, addPoint, setPoints, setError, setToken};