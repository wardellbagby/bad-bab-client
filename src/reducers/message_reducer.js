import {CLEAR_TOAST, SET_TOAST} from "../actions/index";

export default function (state = { toast: null }, action) {

    switch (action.type) {
        case SET_TOAST:
            return { ...state, toast: action.payload };
        case CLEAR_TOAST:
            return { ...state, toast: null };
    }

    return state;
}