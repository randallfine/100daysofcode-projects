import React from 'react';

export default function Start(props){
    let title = "";
    let event = ""
    if(!props.gameOn){
        title = "Start"
        event = props.startClick
    } else {
        title = "Reset"
        event = props.resetClick
    }
    return(
        <button 
                onClick={event} 
                className="start">
            {title}
        </button>
    );
}