import React from 'react';
//import Sounds from "./sounds"

export default function PlayButtons(props){
        const colors = ["green", "red", "yellow", "blue"];
        const values = [0,1,2,3];

    return(
        <div className="play-buttons">
        {values.map((val, i) =>{
           return(

            <div title={val}
                 className="play"
                    onClick={props.buttonClick}
                    onMouseDown={props.mouseDown}
                    onMouseUp={props.mouseUp}
                    id={colors[i]}
                    key={colors[i]}>
            </div>
           );
        })}
        </div>
);
}



