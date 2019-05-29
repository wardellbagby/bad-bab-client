import {FETCH_PLAYERS, FETCH_MEMBERS, FILTER_PLAYER} from "../actions/index";
import _ from 'lodash';

const defaultState = {
    members: [],
    players: [],
    filteredPlayers: null
};

export default function (state = defaultState, action) {
    let payload;

    switch (action.type) {
        case FETCH_PLAYERS:
            // do player stuff here
            payload = action.payload;

            const players = payload && payload.data && payload.data.players ? payload.data.players : [];

            return {...state, players};

        case FETCH_MEMBERS:
            payload = action.payload;
            let members = payload && payload.data && payload.data.members ? payload.data.members : [];

            members = _.sortBy(members, (member) => member.playerName);

            members = _.each(members, (member) => member.name = _.startCase(member.playerName));

            return {...state, members};

        case FILTER_PLAYER:
            const nameFilter = action.payload;
            let filteredPlayers;

            if (_.isEmpty(nameFilter)) {
                filteredPlayers = null;
            } else {
                filteredPlayers = _.filter(state.members, nameContainsFilter(_.toLower(nameFilter)));
            }

            return {...state, filteredPlayers}
    }

    return state;
}

// currying probably is not the best in production code but it is just so beautiful
const nameContainsFilter = (nameFilter) => ({name}) => _.toLower(name).includes(nameFilter);