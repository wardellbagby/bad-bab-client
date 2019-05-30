//
// import {SELECT_PASSWORD} from "../actions/index";
// import _ from 'lodash';
//
// const passwords = [
//     'mouse',
//     'ox',
//     'tiger',
//     'rabbit',
//     'dragon',
//     'snake',
//     'horse',
//     'goat',
//     'monkey',
//     'rooster',
//     'dog',
//     'pig',
//     'cat'
// ];
//
//
// export default function (state = passwords, action) {
//
//
//     switch (action.type) {
//         case REQUEST:
//             const player = action.payload;
//             const players = updatePlayerId({...state.players}, player);
//
//             return {...state, players};
//         case SELECT_MEMBER:
//             const member = action.payload;
//
//             return {...state, memberToCreate: member};
//         case CANCEL_MEMBER_CREATE:
//             return {...state, memberToCreate: null};
//     }
//
//     return state;
// }
//
// function updatePlayerId(players, player) {
//     if (_.has(players, player._id)) {
//         _.unset(players, player._id);
//     } else if (_.values(players).length < 2) {
//         _.set(players, player._id, player);
//     }
//
//     return players;
// }
