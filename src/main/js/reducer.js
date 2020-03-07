import {Map} from 'immutable';

const initialState = Map({points: [], radius: null, error: '', token: '', username: ''});

export default function (state = initialState, action) {
    switch (action.type) {
        case "ADD_POINT":
            if (Object.keys(action.data).length === 0) {
                return state;
            } else {
                return state.set("points", [...state.get('points'), action.data]);
            }
        case "CHANGE_RADIUS":
            return state.set('radius', action.radius);
        case "SET_POINTS":
            return state.set('points', action.data);
        case "SET_ERROR":
            return state.set('error', action.error);
        case "SET_TOKEN":
            return state.set('token', action.token).set('username', action.username);
        case "LOGOUT":
            return state.set('token', '').set('username', '');
    }
    return state;
}
