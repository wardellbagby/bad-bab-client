import {FETCH_COURTS} from "../actions/index";
import _ from 'lodash';
import moment from 'moment-timezone';

export default function (state = {current: [], upcoming: []}, action) {

    switch (action.type) {
        case FETCH_COURTS:
            const squareReservations = _.reject(action.payload.data.reservations, 'randoms');
            const reservations = _.map(squareReservations, courtInTimezone);

            // if we find that "randoms" are important information to view,
            // then we can just partition by randoms to display later

            const sortedReservations = _.sortBy(reservations, ['courtNumber', 'startAt']);
            const courts = mergeReservations(sortedReservations);
            const sortedCourts = _.sortBy(courts, ['startAt']);
            const [currentCourts, upcomingCourts] = _.partition(sortedCourts, 'isCurrentCourt');

            const current = _.map(currentCourts, formatCurrentCourt);
            const upcoming = _.map(upcomingCourts, formatUpcomingCourt);

            return {...state, current, upcoming};
    }

    return state;
}

function courtInTimezone(court) {
    return {
        courtNumber: court.courtNumber,
        startAt: moment(court.startAt).tz('America/Los_Angeles'),
        endAt: moment(court.endAt).tz('America/Los_Angeles'),
        randoms: court.randoms,
        isCurrentCourt: now() - court.startAt >= 0
    }
}

function areReservationsAdjacent(previous, next) {
    return previous &&
        previous.courtNumber === next.courtNumber &&
        previous.randoms === next.randoms &&
        previous.startAt.milliseconds() === next.endAt.milliseconds()
}

function mergeReservations(reservations) {
    return _.reduceRight(reservations, function (flattened, next) {
        const previous = _.last(flattened);
        if (areReservationsAdjacent(previous, next)) {
            previous.endAt = next.startAt;
            return flattened;
        }
        return flattened.concat(next);
    }, []);
}

function now() {
    return new Date(1559108029420);
}

function formatCurrentCourt({courtNumber, endAt}) {
    const duration = moment.duration(endAt - now());
    return {
        courtNumber,
        time: `${formatTime(duration)} remaining`
    };
}

function formatUpcomingCourt({courtNumber, startAt}) {
    const duration = moment.duration(startAt - now());

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