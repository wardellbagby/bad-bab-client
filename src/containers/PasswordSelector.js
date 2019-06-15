import React from 'react';
import {selectPassword} from "../actions";
import {IonButton} from "@ionic/react";

// todo make this non exported, remove use in people reducer
export const passwords = [
    'mouse',
    'ox',
    'tiger',
    'rabbit',
    'dragon',
    'snake',
    'horse',
    'goat',
    'monkey',
    'rooster',
    'dog',
    'pig',
    'cat'
];

export default function PasswordSelector({selectedMember}) {
    return (
        <div className="d-inline-flex flex-wrap justify-content-center">
            {passwords.map(password => (
                <IonButton color="light"
                    onClick={selectPassword(selectedMember)}
                    key={password}
                >
                    {password}
                </IonButton>
            ))}
        </div>
    );
}
