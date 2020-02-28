// import {Map} from 'immutable';

const point = {'x': 0, 'y': 1, 'r': 1, 'result': 1};
// const initialState = Map().set('points', [point]).set('radius', null);
const initialState = {
    'points': [point],
    'radius': null,
    'error': ''
};
export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_POINT":
            // return state.update("points", (points) => points.push(action.data));
            const points = state.points;
            points.push(action.data);
            return Object.assign({}, state, {'points': points});
        case "CHANGE_RADIUS":
            // return state.update('radius', action.radius);
            return Object.assign({}, state, {'radius': action.radius});
        case "SET_POINTS":
            // return state.update('points', action.data)
            return Object.assign({}, state, {'points': action.data});
        case "SET_ERROR":
            return Object.assign({}, state, {'error': action.error});
    }
}
