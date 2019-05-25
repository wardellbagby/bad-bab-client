import axios from "axios";

const BASE_URL = "https://bab.moepas.com/api/";

const MEMBERS = "members";
const PLAYERS = "players";
const COURTS = "courts";
const SESSIONS = "sessions";

export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FETCH_COURTS = 'FETCH_COURTS';
export const FETCH_SESSIONS = 'FETCH_SESSIONS';


export function requestMembers() {
    const request = getRequest(MEMBERS);

    return {
        type: FETCH_MEMBERS,
        payload: request
    };
}

export function requestPlayers() {
    const request = getRequest(PLAYERS);

    return {
        type: FETCH_PLAYERS,
        payload: request
    };
}

function getRequest(MODEL) {
    return axios.get(BASE_URL+model)
}

export function updateSession(startingSession) {
    if (startingSession){

    }
}