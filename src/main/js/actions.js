const changeRadius = function (radius) {
    return {
        type: "CHANGE_RADIUS",
        radius
    }
};

const addPoint = function (point) {
    const url = "/api/points";
    const data = fetch(url, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(point)
    })
        .then(response => {
            if (!response.ok)
                throw Error(response.statusText);
            else
                return response.json();
        })
        .catch(error => console.log(error));
    console.log("AddAction");
    console.log(data);
    return {
        type: "ADD_POINT",
        data
    }
};

const setPoints = function () {
    console.log("setPoints");
    const url = "/api/points";
    const data = fetch(url).then(response => response.json());
    return {
        type: "SET_POINTS",
        data
    }
};

export default {changeRadius, addPoint, setPoints};