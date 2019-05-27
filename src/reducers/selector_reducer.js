import { SELECT_PLAYER } from "../actions/index";

export default function (state = { players: [] }, action) {

    switch (action.type) {
        case SELECT_PLAYER:
            const player = action.payload;
            const players = addPlayerId([...state.players], player);

            return { ...state, players };
    }

    return state;
}

function addPlayerId(players, player) {
    let playerIdPosition = -1;
    if (players.length > 0 && players[0]._id == player._id) {
        playerIdPosition = 1;
    } else if (players.length > 1 && players[1]._id == player._id) {
        playerIdPosition = 0;
    }


    if (playerIdPosition != -1) {
        if (players.length == 1) {
            return [];
        }
        player.checked = false;
        return players.splice(playerIdPosition, 1);
    }

    if (players.length == 2) {
        return players;
    }

    players.push(player);
    player.checked = true;

    return players;
}
