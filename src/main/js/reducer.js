// import {Map} from 'immutable';

const point = {'x':0,'y':1,'r':1,'result':1};
// const initialState = Map().set('points', [point]).set('radius', null);
const initialState = {
    'points':[point],
    'radius':null
};
console.log("points:");
console.log(initialState.points);

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_POINT":
            // return state.update("points", (points) => points.push(action.data));
            return state.points.push(action.data);
        case "CHANGE_RADIUS":
            // return state.update('radius', action.radius);
            return state.radius = action.radius;
        case "SET_POINTS":
            // return state.update('points', action.data)
            return state.points = action.data;
    }
    return state;
}
