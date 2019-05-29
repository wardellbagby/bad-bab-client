import {FETCH_PLAYERS, FETCH_MEMBERS, FILTER_PLAYER, FILTER_MEMBER} from "../actions/index";
import _ from 'lodash';

const defaultState = {
    members: [],
    players: [],
    filteredPlayers: null,
    filteredMembers : null
};

export default function (state = defaultState, action) {
    let payload;

    switch (action.type) {
        case FETCH_PLAYERS:
            // do player stuff here
            payload = action.payload;

            let players = payload && payload.data && payload.data.players ? payload.data.players : [];

            players = _.sortBy(players, (player) => player.name);

            players = _.each(players, (player) => player.name = _.startCase(player.name));

            return {...state, players};

        case FETCH_MEMBERS:
            payload = action.payload;
            let members = payload && payload.data && payload.data.members ? payload.data.members : [];

            members = _.sortBy(members, (member) => member.playerName);

            members = _.each(members, (member) => member.name = _.startCase(member.playerName));

            return {...state, members};

        case FILTER_PLAYER:
            const playerNameFilter = action.payload;
            let filteredPlayers;

            if (_.isEmpty(playerNameFilter)) {
                filteredPlayers = null;
            } else {
                filteredPlayers = _.filter(state.players, nameContainsFilter(_.toLower(playerNameFilter)));
            }

            return {...state, filteredPlayers};

        case FILTER_MEMBER:
            const memberNameFilter = action.payload;
            let filteredMembers = null;

            if (!_.isEmpty(memberNameFilter)) {
                filteredMembers = _.filter(state.members, nameContainsFilter(_.toLower(memberNameFilter)));
            }

            return {...state, filteredMembers};
    }

    return state;
}

// currying probably is not the best in production code but it is just so beautiful
const nameContainsFilter = (nameFilter) => ({name}) => _.toLower(name).includes(nameFilter);