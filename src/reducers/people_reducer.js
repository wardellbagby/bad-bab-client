import {CANCEL_MEMBER_CREATE, FETCH_MEMBERS, FETCH_PLAYERS, FILTER_MEMBER, FILTER_PLAYER} from "../actions/index";
import _ from 'lodash';
import {passwords} from "../containers/PasswordSelector";

const defaultState = {
    members: [],
    players: [],
    filteredPlayers: null,
    filteredMembers: null
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

            // todo: remove this logic, make the imported passwords non exported
            players = _.each(players, (player) => player.password = player.password || _.sample(passwords));

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

                filteredMembers.push({name: memberNameFilter, _id: "searchedMember", isNew: true});
            }


            return {...state, filteredMembers};

        case CANCEL_MEMBER_CREATE:
            return {...state, filteredMembers: null};
    }

    return state;
}

// currying probably is not the best in production code but it is just so beautiful
const nameContainsFilter = (nameFilter) => ({name}) => _.toLower(name).includes(nameFilter);