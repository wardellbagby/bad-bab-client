import {SELECT_PLAYER, SELECT_MEMBER, CANCEL_MEMBER_CREATE} from "../actions/index";
import _ from 'lodash';

export default function (state = {players: {}, memberToCreate: null}, action) {


    switch (action.type) {
        case SELECT_PLAYER:
            const player = action.payload;
            const players = updatePlayerId({...state.players}, player);

            return {...state, players};
        case SELECT_MEMBER:
            const member = action.payload;

            return {...state, memberToCreate: member};
        case CANCEL_MEMBER_CREATE:
            return {...state, memberToCreate: null};
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
