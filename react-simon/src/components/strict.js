import React from 'react';

export default function StrickModeButton(props){
    return(
        <button onClick={props.strictClick}className="strict-button">Strict</button>
    )
}