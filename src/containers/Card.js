import React, {useState} from 'react';
import _ from 'lodash';

export default function Card({title, header, children}) {
    const [paneIsVisible, setPaneVisibility] = useState(true);
    const className = _.toLower(title) + " bg-dark card btn-group border-secondary";

    const updatePaneVisibility = () => setPaneVisibility(!paneIsVisible);

    const caretDirection = paneIsVisible ? "down" : "left";

    const collapseClass = paneIsVisible ? "collapse show" : "collapse";

    const heading = header || title;

    return (
        <div className={className}>
            <a className="card-header bg-secondary text-light" onClick={updatePaneVisibility}>
                <h5 className="mb-0 d-flex">
                    <span className="flex-grow-1">{heading}</span>

                    <i className={`fas fa-caret-${caretDirection}`}/>
                </h5>
            </a>

            <div className={collapseClass}>
                <div className="card-body">
                    {children}
                </div>
            </div>
        </div>
    );
}