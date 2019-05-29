import {FETCH_COURTS} from "../actions/index";
import _ from 'lodash';

export default function (state = [], action) {

    switch (action.type) {
        case FETCH_COURTS:
            const courts = _.groupBy(action.payload.data.reservations, "courtNumber");

            return _.map(courts, (reservations, courtNumber) => ({id: courtNumber, reservations}));
    }

    return state;
}