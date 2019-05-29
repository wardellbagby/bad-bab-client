import axios from "axios";
import sampleCourtData from '../sample-data/courts'
import samplePlayerData from '../sample-data/players'
import sampleMemberData from '../sample-data/members'

const BASE_URL = "https://bab.moepas.com/api/";

const MEMBERS = "members";
const PLAYERS = "players";
const COURTS = "courts";
const SESSIONS = "sessions";

export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FETCH_COURTS = 'FETCH_COURTS';
export const FETCH_SESSIONS = 'FETCH_SESSIONS';
export const SELECT_PLAYER = 'SELECT_PLAYER';
export const FILTER_PLAYER = 'FILTER_PLAYER';


export function requestMembers() {
    // const request = getRequest(MEMBERS);
    const request = {data: sampleMemberData};

    return {
        type: FETCH_MEMBERS,
        payload: request
    };
}

export function requestPlayers() {
    // const request = getRequest(PLAYERS);
    const request = {data: samplePlayerData};

    return {
        type: FETCH_PLAYERS,
        payload: request
    };
}

export function requestCourts() {
    // const request = getRequest(COURTS);
    const request = {data: sampleCourtData};

    return {
        type: FETCH_COURTS,
        payload: request
    };
}

function getRequest(MODEL) {
    return axios.get(BASE_URL + MODEL);
}

export function updateSession(startingSession) {
    if (startingSession) {

    }
}

export function selectPlayer(player) {
    return {
        type: SELECT_PLAYER,
        payload: player
    };
}

export function playerFilterChanged(playerText) {
    return {
        type: FILTER_PLAYER,
        payload: playerText
    };
}
