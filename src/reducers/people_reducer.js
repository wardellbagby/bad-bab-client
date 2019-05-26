import { FETCH_PLAYERS, FETCH_MEMBERS } from "../actions/index";

export default function (state = { members: [], players: [] }, action) {
    let payload;

    switch (action.type) {
        case FETCH_PLAYERS:
            // do player stuff here
            payload = action.payload;

            return { ...state, players: payload.data.players }
        case FETCH_MEMBERS:
            payload = action.payload;

            return { ...state, members: payload.data.members }
    }

    return state;
}