import {Map} from 'immutable';

const initialState = Map().set('points', []).set('radius', null);

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_POINT":
            return state.update("points", (points) => points.push(action.data));
        case "CHANGE_RADIUS":
            return state.update('radius', (radius) => action.radius);
        case "SET_POINTS":
            return state.update('points', action.data)
    }
    return state;
}
