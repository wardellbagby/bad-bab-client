import { FETCH_PLAYERS, FETCH_MEMBERS, SELECT_PLAYER } from "../actions/index";

export default function (state = { members: [], players: [], deleted: [] }, action) {
    let payload;

    switch (action.type) {
        case SELECT_PLAYER:
            return { ...state, players: [...state.players] };

        case FETCH_PLAYERS:
            // do player stuff here
            payload = action.payload;

            return { ...state, players: payload.data.players };

        case FETCH_MEMBERS:
            payload = action.payload;
            const members = payload && payload.data && payload.data.members ? payload.data.members : [];

            return { ...state, members };
    }

    return state;
}