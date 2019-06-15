import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {requestCourts} from "../actions";
import Court from "../components/Court";

export default function Courts() {
    const courts = useSelector(state => state.courts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCourts());
    }, []);

    return (
        <div>
            {courts.map(court => (
                <Court court={court} key={court.id}/>
            ))}
        </div>
    );
}
