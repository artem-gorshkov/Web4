const changeRadius = function (radius) {
    return {
        type: "CHANGE_RADIUS",
        radius
    }
};

const addPoint = function (point) {
    const url = document.location.host + "points";
    const data = fetch(url, {
        method: "POST",
        body: JSON.stringify(point)
    })
        .then(response => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .catch(error => console.log(error));
    return {
        type: "ADD_POINT",
        data
    }
};

const setPoints = function () {
    const url = document.location.host + "points";
    const data = fetch(url).then(response => response.json());
    return {
        type: "SET_POINTS",
        data
    }
};

export default {changeRadius, addPoint, setPoints};