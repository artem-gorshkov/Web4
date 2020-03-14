import {Map} from 'immutable';

const initialState = Map({points: [], radius: null, error: '', token: window.sessionStorage.getItem('token'), username: window.sessionStorage.getItem('username')});

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
            window.sessionStorage.setItem('token', action.token);
            window.sessionStorage.setItem('username', action.username);
            return state.set('token', action.token).set('username', action.username);
        case "LOGOUT":
            window.sessionStorage.setItem('token', '');
            window.sessionStorage.setItem('username', '');
            return state.set('token', '').set('username', '');
    }
    return state;
}
