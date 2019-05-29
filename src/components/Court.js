import React, {useState} from 'react';
import _ from 'lodash';

export default function Court({court}) {
    const [paneIsVisible, setPaneVisibility] = useState(true);

    const updatePaneVisibility = () => setPaneVisibility(!paneIsVisible);

    const caretDirection = paneIsVisible ? "down" : "left";

    const collapse = paneIsVisible ? "show" : "";

    return (
        <div className="form-row card bg-secondary">
            <a className="card-header" onClick={updatePaneVisibility}>
                <h5 className="mb-0 d-flex">
                    <span class="flex-grow-1">Court {court.id}</span>

                    <i className={`fas fa-caret-${caretDirection}`}/>
                </h5>
            </a>

            <div className={`collapse ${collapse}`}>
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

