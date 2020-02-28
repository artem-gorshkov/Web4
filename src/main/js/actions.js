const changeRadius = function (radius) {
    console.log("changeRadius");
    console.log(radius);
    return {
        type: "CHANGE_RADIUS",
        radius
    }
};

const addPoint = async function (point) {
    console.log("addPoint");
    console.log(point);
    const url = "/api/points";
    let data = {};
    let response = await fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
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

const setPoints = async function () {
    console.log("setPoints");
    const url = "/api/points";
    let data = [];
    let response = await fetch(url);
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

export default {changeRadius, addPoint, setPoints, setError};