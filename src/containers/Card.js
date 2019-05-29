import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestCourts} from "../actions";
import '../style/PlayerSelector.css';
import Court from "../components/Court";
import _ from 'lodash';

export default function Card({title, children}) {
    const className = _.toLower(title) + " bg-dark card btn-group border-secondary";

    return (
        <div className={className}>
            <div className="card-header bg-secondary text-light">
                <h5 className="mb-0">{title}</h5>
            </div>

            <div className="card-body">
                {children}
            </div>
        </div>
    );
}
