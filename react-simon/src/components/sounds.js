import React from 'react';
export default function Sounds(props){
    console.log(props)
    return (
    <div>
        <audio id="sound0" src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3" /*autostart="false"*/></audio>
        <audio id="sound1" src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3" /*autostart="false"*/>></audio>
        <audio id="sound2" src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3" /*autostart="false"*/>></audio>
        <audio id="sound3" src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3" /*autostart="false"*/>></audio>
    </div>
    );

}
