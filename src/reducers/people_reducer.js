import {
    CANCEL_MEMBER_CREATE,
    FETCH_COURTS,
    FETCH_MEMBERS,
    FETCH_PLAYERS,
    FILTER_MEMBER,
    FILTER_PLAYER,
    REMOVE_PLAYER,
    UPDATE_PLAYER
} from "../actions/index";
import _ from 'lodash';
import {passwords} from "../containers/PasswordSelector";

const defaultState = {
    members: [],
    players: [],
    partitionedPlayers: [[], []],
    chunkedMembers: [],
    filteredPlayers: null,
    filteredMembers: null,
    reservedPlayerNames: [],
    playerNameFilter: null
};

const CHUNK_SIZE = 3;

export default function (state = defaultState, action) {
    let payload;

    switch (action.type) {
        case FETCH_PLAYERS:
            payload = action.payload;

            let players = payload && payload.data && payload.data.players ? payload.data.players : [];

            players = _.sortBy(players, (player) => player.name);

            players = _.each(players, (player) => player.name = _.startCase(player.name));

            // todo: remove this logic, make the imported passwords non exported
            players = _.each(players, (player) => player.password = player.password || _.sample(passwords));

            return {...state, players, partitionedPlayers: partitionedPlayerList(players, state.reservedPlayerNames)};

        case FETCH_MEMBERS:
            payload = action.payload;
            let members = payload && payload.data && payload.data.members ? payload.data.members : [];

            members = _.sortBy(members, (member) => member.playerName);

            members = _.each(members, (member) => member.name = _.startCase(member.playerName));

            const chunkedMembers = chunkify(members);

            return {...state, members, chunkedMembers};

        case FILTER_PLAYER:
            let playerNameFilter = action.payload;

            return {
                ...state,
                playerNameFilter,
                filteredPlayers: filteredPlayerList(state.players, state.reservedPlayerNames, playerNameFilter)
            };

        case FILTER_MEMBER:
            const memberNameFilter = action.payload;
            let filteredMembers = null;

            if (!_.isEmpty(memberNameFilter)) {
                filteredMembers = _.filter(state.members, nameContainsFilter(memberNameFilter));

                filteredMembers = chunkify(filteredMembers);

                filteredMembers.push([{name: memberNameFilter, _id: "searchedMember", isNew: true}]);
            }


            return {...state, filteredMembers};

        case CANCEL_MEMBER_CREATE:
            return {...state, filteredMembers: null};

        case REMOVE_PLAYER:
            const playerToRemove = action.payload;
            return {...state, players: _.reject(state.players, playerToRemove)};

        case UPDATE_PLAYER:
            updatePlayerInformation(action.payload);
            return {...state, players: [...state.players]}

        case FETCH_COURTS:
            let reservedPlayerNames = _.flatten(_.map(action.payload.data.reservations, 'players'));
            reservedPlayerNames = _.map(reservedPlayerNames, _.startCase);

            return {
                ...state,
                reservedPlayerNames,
                partitionedPlayers: partitionedPlayerList(state.players, reservedPlayerNames),
                filteredPlayers: filteredPlayerList(state.players, state.reservedPlayerNames, state.playerNameFilter)
            };
    }

    return state;
}

// currying probably is not the best in production code but it is just so beautiful
const nameContainsFilter = (nameFilter) => ({name}) => _.toLower(name).includes(_.toLower(nameFilter));

function chunkify(list) {
    if (list.length === 0) {
        return [];
    }

    list = _.chunk(list, CHUNK_SIZE);

    if (_.last(list).length !== CHUNK_SIZE) {
        _.last(list)[CHUNK_SIZE - 1] = undefined;
    }

    return list;
}

function updatePlayerInformation({player, name, password}) {
    player.name = name;
    player.password = password;
}

function partitionedPlayerList(players, reservedPlayerNames) {
    return _.partition(players, (player) => _.includes(reservedPlayerNames, player.name));
}

function filteredPlayerList(players, reservedPlayerNames, playerNameFilter) {
    let filteredPlayers;

    if (_.isEmpty(playerNameFilter)) {
        filteredPlayers = null;
    } else {
        filteredPlayers = _.filter(players, nameContainsFilter(playerNameFilter));
        filteredPlayers = partitionedPlayerList(filteredPlayers, reservedPlayerNames)
    }

    return filteredPlayers;
}