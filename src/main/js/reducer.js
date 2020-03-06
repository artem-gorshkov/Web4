import {Map} from 'immutable';

const initialState = Map({points: [], radius: null, error: '', token:''});

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_POINT":
            console.log("Я тут и я обновляю canvas");
            if (Object.keys(action.data).length === 0) {
                return state;
            } else {
                const points = state.get('points');
                points.push(action.data);
                return state.set("points", points);
            }
        case "CHANGE_RADIUS":
            console.log("Я тут и я меняю радиус");
            return state.set('radius', action.radius);
        case "SET_POINTS":
            return state.set('points', action.data);
        case "SET_ERROR":
            return state.set('error', action.error);
        case "SET_TOKEN":
            return state.set('token', action.token);

    }
    return state;
}
