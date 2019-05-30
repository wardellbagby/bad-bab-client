import React from 'react';
import {selectPassword} from "../actions";

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

export default function PasswordSelector({selectedMember}) {
    return (
        <div className="d-inline-flex flex-wrap justify-content-center">
            {passwords.map(password => (
                <button
                    type="button"
                    onClick={selectPassword(selectedMember)}
                    className={`mr-1 mb-1 btn btn-outline-dark`}
                >
                    {password}
                </button>
            ))}
        </div>
    );
}
