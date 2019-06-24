import React from 'react';

export function Modal({children}) {
    return (
        <div className="modal fade" id="pageModal"
             role="dialog" aria-labelledby="pageModalScrollableTitle" aria-hidden="true" data-backdrop="false">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function ModalHeader({children}) {
    return (
        <div className="modal-header">
            {children}
        </div>
    );
}

export function ModalFooter({children}) {
    return (
        <div className="modal-footer">
            {children}
        </div>
    );
}

export function ModalBody({children}) {
    return (
        <div className="modal-body">
            {children}
        </div>
    );
}