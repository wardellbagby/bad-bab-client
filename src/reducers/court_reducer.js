/* eslint-disable default-case */
import { FETCH_COURTS, CREATE_COURT } from "../actions/index";
import _ from 'lodash';
import moment from 'moment-timezone';
const now = new Date();

export default function (state = { current: [], upcoming: [], reservations: [] }, action) {

    let reservations;

    switch (action.type) {
        case FETCH_COURTS:
            reservations = action.payload.data.reservations;
            return splitReservations(reservations);
        case CREATE_COURT:
            const court = action.payload.data.reservation;
            reservations = state.reservations;

            reservations.push(court);

            return splitReservations(reservations);
    }

    return state;
}

function splitReservations(reservations, state) {
    reservations = _.reject(reservations, 'randoms');
    reservations = _.map(reservations, courtInTimezone);

    // if we find that "randoms" are important information to view,
    // then we can just partition by randoms to display later

    const sortedReservations = _.sortBy(reservations, ['courtNumber', 'startAt']);
    const courts = mergeReservations(sortedReservations);
    const sortedCourts = _.sortBy(courts, ['startAt']);
    const [currentCourts, upcomingCourts] = _.partition(sortedCourts, 'isCurrentCourt');

    const current = _.map(currentCourts, formatCurrentCourt);
    const upcoming = _.map(upcomingCourts, formatUpcomingCourt);

    return {
        ...state,
        current,
        upcoming,
        reservations
    };
}

function courtInTimezone(court) {
    return {
        courtNumber: court.courtNumber,
        startAt: moment(court.startAt).tz('America/Los_Angeles'),
        endAt: moment(court.endAt).tz('America/Los_Angeles'),
        randoms: court.randoms,
        isCurrentCourt: now - court.startAt >= 0
    }
}

function reservationsCanBeCombined(previous, next) {
    return previous &&
        previous.courtNumber === next.courtNumber &&
        previous.randoms === next.randoms &&
        previous.startAt.milliseconds() === next.endAt.milliseconds()
}

function mergeReservations(reservations) {
    return _.reduceRight(reservations, function (flattened, next) {
        const previous = _.last(flattened);
        if (reservationsCanBeCombined(previous, next)) {
            previous.endAt = next.startAt;
            previous.isCurrentCourt |= next.isCurrentCourt;
            return flattened;
        }
        return flattened.concat(next);
    }, []);
}

function formatCurrentCourt({ courtNumber, endAt }) {
    const duration = moment.duration(endAt - now);
    return {
        courtNumber,
        time: `${formatTime(duration)} remaining`
    };
}

function formatUpcomingCourt({ courtNumber, startAt }) {
    const duration = moment.duration(startAt - now);

    return {
        courtNumber,
        time: `${formatTime(duration)} wait`
    };
}

function formatTime(duration) {
    let formatString = "mm";

    if (duration.hours) {
        formatString = "HH:mm";
    }

    return moment.utc(duration.asMilliseconds()).format(formatString);
}
