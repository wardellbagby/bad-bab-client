import React from 'react';
import {IonButton, IonIcon, IonItem} from "@ionic/react";

export function Modal({ children = <ModalBody/>, modalId = "pageModal" }) {
    return (
        <div className="modal fade" id={modalId}
             role="dialog" data-backdrop="false">
            <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
                <div className="modal-content">
                    {children}
                </div>
            </div>
        </div>
    );
}

export function ModalHeader({ children }) {
    return (
        <div className="modal-header">
            {children}
        </div>
    );
}

export function ModalFooter({ onCancel, onSuccess, successEnabled = true }) {
    return (
        <div className="modal-footer">
            <IonItem className="w-100" lines="none">
                <IonButton color="danger"
                           onClick={onCancel}
                           slot="start"
                           size="medium"
                           data-dismiss="modal"
                >
                    <IonIcon slot="icon-only" name="remove-circle"/>
                </IonButton>

                <IonButton color="success"
                           onClick={onSuccess}
                           disabled={!successEnabled}
                           slot="end"
                           data-dismiss="modal"
                           size="medium"
                >
                    <IonIcon slot="icon-only" name="checkmark-circle"/>
                </IonButton>
            </IonItem>
        </div>
    );
}

export function ModalBody({ children }) {
    return (
        <div className="modal-body">
            {children}
        </div>
    );
}