/* eslint-disable default-case */
import {
    CANCEL_MEMBER_CREATE,
    CANCEL_PLAYER_UPDATE,
    DESELECT_PLAYERS,
    FILTER_MEMBER,
    FILTER_PLAYER,
    REMOVE_PLAYER,
    SELECT_MEMBER,
    SELECT_PLAYER,
    START_UPDATING_PLAYER,
    UPDATE_PLAYER
} from "../actions/index";
import _ from 'lodash';

const defaultState = {
    players: {},
    memberToCreate: {},
    password: null,
    playerToUpdate: {},
    playerNameFilter: null,
    memberNameFilter: null,
    playerNames: []
};

export default function (state = defaultState, action) {

    let player;

    switch (action.type) {
        case SELECT_PLAYER:
            player = action.payload;
            const players = updatePlayerSelections({ ...state.players }, player);

            return { ...state, players, playerNames: _.map(players, (player) => _.toLower(player.name)) };
        case DESELECT_PLAYERS:
            return { ...state, players: {}, playerNames: [] };

        case START_UPDATING_PLAYER:
            player = action.payload;
            return { ...state, playerToUpdate: player };

        case UPDATE_PLAYER:
            return { ...state, playerToUpdate: {} };

        case CANCEL_PLAYER_UPDATE:
            return { ...state, playerToUpdate: {} };

        case SELECT_MEMBER:
            const member = action.payload;

            return { ...state, memberToCreate: member };

        case CANCEL_MEMBER_CREATE:
            return { ...state, memberToCreate: {} };

        case REMOVE_PLAYER:
            return { ...state, playerNameFilter: null };

        case FILTER_PLAYER:
            const playerNameFilter = action.payload;

            return { ...state, playerNameFilter };

        case FILTER_MEMBER:
            const memberNameFilter = action.payload;

            return { ...state, memberNameFilter };
    }

    return state;
}

function updatePlayerSelections(players, player) {
    if (_.has(players, player._id)) {
        _.unset(players, player._id);
    } else if (_.values(players).length < 2) {
        _.set(players, player._id, player);
    }

    return players;
}
