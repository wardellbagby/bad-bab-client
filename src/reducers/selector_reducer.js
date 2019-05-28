import { SELECT_PLAYER } from "../actions/index";
import _ from 'lodash';

export default function (state = { players: {} }, action) {

    switch (action.type) {
        case SELECT_PLAYER:
            const player = action.payload;
            const players = updatePlayerId({ ...state.players }, player);

            return { ...state, players };
    }

    return state;
}

function updatePlayerId(players, player) {
    if (_.has(players, player._id)) {
        _.unset(players, player._id);
    } else if (_.values(players).length < 2) {
        _.set(players, player._id, player);
    }

    return players;
}
