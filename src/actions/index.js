import axios from "axios";
import qs from "querystring";
import sampleMemberData from '../sample-data/members'

const BASE_URL = "https://bab.moepas.com/api/";

const MEMBERS = "members";
const PLAYERS = "players";
const COURTS = "courts";
const SESSIONS = "sessions";

const CREATE_PLAYER_ENDPOINT = "players/add";
const DELETE_PLAYER_ENDPOINT = "players/delete";

const CREATE_COURT_ENDPOINT = "courts/register";

export const FETCH_MEMBERS = 'FETCH_MEMBERS';
export const FETCH_PLAYERS = 'FETCH_PLAYERS';
export const FETCH_COURTS = 'FETCH_COURTS';
export const FETCH_SESSIONS = 'FETCH_SESSIONS';

// non get player requests
export const CREATE_PLAYER = 'CREATE_PLAYER';
export const REMOVE_PLAYER = 'REMOVE_PLAYER';
export const UPDATE_PLAYER = 'UPDATE_PLAYER';

// non get Court requests
export const CREATE_COURT = 'CREATE_COURT';

export const SELECT_PLAYER = 'SELECT_PLAYER';
export const DESELECT_PLAYERS = 'DESELECT_PLAYERS';
export const START_UPDATING_PLAYER = 'START_UPDATING_PLAYER';
export const CANCEL_PLAYER_UPDATE = 'CANCEL_PLAYER_UPDATE';
export const SELECT_MEMBER = 'SELECT_MEMBER';
export const SELECT_COURT_RANDOMS = 'SELECT_COURT_RANDOMS';

export const FILTER_PLAYER = 'FILTER_PLAYER';
export const FILTER_MEMBER = 'FILTER_MEMBER';

export const CANCEL_MEMBER_CREATE = 'CANCEL_MEMBER_CREATE';

export const SET_TOAST = "SET_TOAST";
export const CLEAR_TOAST = "CLEAR_TOAST";

// Setup the content-type and make sure data is form-encoded.
axios.interceptors.request.use((config) => {
    config.headers["Content-type"] = 'application/x-www-form-urlencoded';
    config.data = qs.stringify(config.data);
    return config;
});

export function requestMembers() {
    // const request = getRequest(MEMBERS);
    const request = { data: sampleMemberData };

    return {
        type: FETCH_MEMBERS,
        payload: request
    };
}

export function requestPlayers() {
    const request = getRequest(PLAYERS);
    // const request = {data: samplePlayerData};

    return {
        type: FETCH_PLAYERS,
        payload: request
    };
}

export function requestCourts() {
    const request = getRequest(COURTS);
    // const request = {data: sampleCourtData};

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

export function deselectPlayers() {
    return {
        type: DESELECT_PLAYERS
    };
}

export function selectMember(member) {
    return {
        type: SELECT_MEMBER,
        payload: member
    };
}

export function selectCourtRandoms() {
    return {
        type: SELECT_COURT_RANDOMS
    };
}

export function playerFilterChanged(playerText) {
    return {
        type: FILTER_PLAYER,
        payload: playerText
    };
}


export function memberFilterChanged(memberText) {
    return {
        type: FILTER_MEMBER,
        payload: memberText
    };
}


export function cancelCreatingMember() {
    return {
        type: CANCEL_MEMBER_CREATE
    };
}

export function startUpdatingPlayer(player) {
    return {
        type: START_UPDATING_PLAYER,
        payload: player
    };
}

export async function updatePlayer(player, name, password) {
    const fail = { type: SET_TOAST, payload: "Unable to update player" };

    const removeResult = await removePlayer(player);
    if (removeResult.type === SET_TOAST) {
        return fail;
    }

    const createResult = await createPlayer({ name, password });
    if (createResult.type === SET_TOAST) {
        return fail;
    }

    return {
        type: UPDATE_PLAYER,
        payload: { player, name, password }
    };
}

export function cancelPlayerUpdate() {
    return {
        type: CANCEL_PLAYER_UPDATE
    };
}

export async function removePlayer(player) {
    let type = REMOVE_PLAYER;
    let payload = null;

    await axios.post(
        BASE_URL + DELETE_PLAYER_ENDPOINT,
        player
    ).then(() => {
        payload = player
    }).catch(error => {
        console.log(error);
        type = SET_TOAST;
        payload = "Unable to delete the player";
    });

    return {
        type,
        payload
    };
}

export async function createPlayer(player) {
    let type = CREATE_PLAYER;
    let payload = null;

    await axios.post(
        BASE_URL + CREATE_PLAYER_ENDPOINT,
        player
    ).then(() => {
        payload = player
    }).catch(error => {
        console.log(error);
        type = SET_TOAST;
        payload = "Unable to create the player";
    });

    return {
        type,
        payload
    };
}

export async function createCourt(court) {
    let type = CREATE_COURT;
    let payload = null;

    await axios.post(
        BASE_URL + CREATE_COURT_ENDPOINT,
        court
    ).then(res => {
        payload = res
    }).catch(error => {
        console.log(error);
        type = SET_TOAST;
        payload = "Unable to create the court";
    });

    return {
        type,
        payload
    };
}


export function clearToast() {
    return {
        type: CLEAR_TOAST
    };
}
