import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {selectPlayer} from "../actions";
import _ from 'lodash';

export default function Court({court}) {

    const cardId = "court-" + court.id;

    return (
        <div className="form-row card bg-secondary">
            <a className="card-header" data-toggle="collapse" data-target={"#" + cardId}>
                <h5 className="mb-0">
                        Court {court.id}
                </h5>
            </a>
            <div id={cardId} className="collapse show">
                <div className="card-body py-3">
                    {court.reservations.map(reservation => (
                        <div>
                            {reservation.randoms ? "Random people" : _.join(reservation.players, " ")}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

