const changeRadius = function (radius) {
    return {
        type: "CHANGE_RADIUS",
        radius
    }
};

const setError = function (error) {
    return {
        type: "SET_ERROR",
        error
    }
};

const addPoint = async function (point, token, username) {
    const url = "/api/points";
    let data = {};
    let response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: token,
            'X-USER-ID': username,
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(point)
    });
    if (response.ok) {
        data = await response.json();
    } else {
        throw Error(response.statusText);
    }
    return {
        type: "ADD_POINT",
        data
    }
};

const setPoints = async function (token, username) {
    const url = "/api/points";
    let data = [];
    let response = await fetch(url, {
        headers: {
            Authorization: token,
            'X-USER-ID': username,
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    if (response.ok) {
        data = await response.json();
    } else {
        throw Error(response.statusText);
    }
    return {
        type: "SET_POINTS",
        data
    }
};

const logout = async function (token, username) {
    const url = "/api/logout";
    let response = await fetch(url, {
        method: "POST",
        headers: {
            Authorization: token,
            'X-USER-ID': username,
            'Content-Type': 'application/json;charset=utf-8'
        },
    });
    if (response.ok) {
        return {
            type: "LOGOUT",
        }
    } else {
        throw Error(response.statusText);
    }
};

export default {changeRadius, addPoint, setPoints, setError, logout};