import React from 'react';

export default function StepCounter(props){     
    return(
        <div className="step-counter">
            <p className="count">{props.stepCounter}</p>
        </div>
    )
}