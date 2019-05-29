import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestCourts} from "../actions";
import '../style/PlayerSelector.css';
import Court from "../components/Court";

export default function Courts() {
    const courts = useSelector(state => state.courts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCourts());
    }, []);

    return (
        <div className="courts bg-dark card btn-group border-secondary">
            <div className="card-header bg-secondary text-light">
                <h5 className="mb-0">Courts</h5>
            </div>

            <div className="card-body">
                {courts.map(court => (
                    <Court court={court} key={court.id}/>
                ))}
            </div>
        </div>
    );
}
