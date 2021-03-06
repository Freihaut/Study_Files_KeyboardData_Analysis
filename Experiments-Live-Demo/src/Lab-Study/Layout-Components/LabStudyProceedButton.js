// button that is used to proceed to the next experimental page

import React from 'react';

export default function LabStudyProceedButton(props){

    const proceedButtonStyle = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "8px",
        marginBottom: "10px",
    };

    return(
            <div>
                <div style={{marginTop: "50px"}}>
                    {/*<p style={{visibility: this.props.disabled ? "visible" : "hidden"}}>*/}
                    {/*Bitte bearbeiten Sie die Seite vollständig, bevor Sie fortfahren.*/}
                    {/*</p>*/}
                </div>
                <div style={proceedButtonStyle} className="control">
                    <button className="button is-link" onClick={props.onClick}
                            disabled={props.disabled}>Continue</button>
                </div>
            </div>
        );
}