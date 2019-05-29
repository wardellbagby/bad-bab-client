import React, {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {requestCourts} from "../actions";
import '../style/PlayerSelector.css';
import Court from "../components/Court";
import Card from "./Card";

export default function Courts() {
    const courts = useSelector(state => state.courts);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(requestCourts());
    }, []);

    return (
        <Card title="Courts">
            {courts.map(court => (
                <Court court={court} key={court.id}/>
            ))}
        </Card>
    );
}
