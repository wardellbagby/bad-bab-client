import React from 'react';
import {IonButton} from "@ionic/react";

const passwords = [
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

export default function PasswordSelector({selectedPassword, updatePassword}) {
    const colorForPassword = (password) => password === selectedPassword ? "medium" : "light";
    const handleUpdatePassword = (password) => () => updatePassword(password);

    return (
        <div className="d-inline-flex flex-wrap justify-content-center">
            {passwords.map(password => (
                <IonButton color={colorForPassword(password)}
                           onClick={handleUpdatePassword(password)}
                           key={password}
                >
                    {password}
                </IonButton>
            ))}
        </div>
    );
}
