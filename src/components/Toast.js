import React from 'react';
import {IonToast} from "@ionic/react";
import {clearToast} from "../actions";
import {useDispatch, useSelector} from "react-redux";

export default function Toast() {
    const dispatch = useDispatch();
    const toastMessage = useSelector(state => state.messages.toast);

    return (
        <IonToast
            isOpen={!!toastMessage}
            onDidDismiss={() => dispatch(clearToast())}
            message={toastMessage}
            duration={800}
        />
    )
}