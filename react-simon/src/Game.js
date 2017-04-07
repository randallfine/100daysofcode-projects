import React, { Component } from 'react';
import Start from "./components/start"
import PlayButtons from "./components/playButtons";
import StepCounter from "./components/stepCounter"
import StrickModeButton from "./components/strict"

import{ playSounds, stopSounds} from "./logic/tones"

import './App.css';

class Game extends Component {
  constructor(){
    super();
    this.state = {
      cpuPick: [],
      step: 0,
      index: 0,
      gameOn: false,
      strict: false,
      cpuTurn: true,
      playerTurn: false,
    };
    
  }


  random = () =>{
    this.setState((prevState,props) => {
    prevState.cpuPick.push(Math.round(Math.random()*3))
    });
  }

  addStep = () => {
    this.setState((prevState, props) => {
      prevState.step++;
    })
  }

  cpuPlay = () => {
      this.addStep();
      this.random();
      this.cpuLoop(this.state.cpuPick)
}

startClick = () => {
  this.setState((prevState) => {
    prevState.gameOn = true
    prevState.step = 0;
  });
  this.cpuPlay();
}

showCpuClick = (button) =>{
  button.classList.add("lightUp");
 playSounds(Number(button.title))
  button.addEventListener("animationend", function(){
    stopSounds();
  button.classList.remove("lightUp");
  },false);
}

 cpuLoop = (array) => {
   if(this.state.step >= 20){
     this.setState((prevState)=> prevState.step = "Win!",this.reset())
     return;
   }
   let playButtons = document.querySelectorAll(".play");
    let currentIndex = 0;
    let looper = () => {
      if(currentIndex >= array.length){
          clearInterval(intervalID);
          this.switchTurns();
          return;
        }
        let sequence = this.showCpuClick(playButtons[array[currentIndex]])
        setTimeout(sequence, 2000);
        currentIndex++;
        
    }  
    let intervalID = setInterval(looper, 2000);  
    }

  playerClick = (e) =>{
    if(!this.state.playerTurn){
      return;
    }
    if(Number(e.target.title) === this.state.cpuPick[this.state.index]){
      this.setState((prevState) => {
        prevState.index++
      }, ()=>this.checkTurn());
    } else {
      if(this.state.strict){
        console.log("strict")
        this.setState((prevState)=> prevState.step = "Lose!",this.reset());
       console.log(this.state.gameOn)
      } else {
      console.log("NO!!")
      this.setState((prevState) => {
        prevState.index = 0;
      });
      this.switchTurns();
      this.cpuLoop(this.state.cpuPick)
       }
      
    }
  }

  mouseDown = (e) => {
    playSounds(e.target.title);
  }

  mouseUp = () => stopSounds();
  

  checkTurn = () => {
    if(this.state.index  === this.state.cpuPick.length){
      this.switchTurns();
      this.cpuPlay();
    }
  }

switchTurns = () => {
    if(this.state.cpuTurn){
      this.setState((prevState) =>{
        prevState.cpuTurn = false;
        prevState.playerTurn = true;
        prevState.index = 0;
      });  
    } else {
        this.setState((prevState) =>{
        prevState.cpuTurn = true;
        prevState.playerTurn = false;
      });
    }
}


reset = () => {
  this.setState((prevState) => {
        prevState.index = 0;
        prevState.cpuPick = [];
        prevState.step = 0;
        prevState.gameOn = false;
      });
      if(!this.state.cpuTurn){
        this.switchTurns();
      }
}
strictMode = () => {
  let strickButton = document.querySelector(".strict-button")
  if(!this.state.gameOn){
    if(!this.state.strict){
      this.setState((prevState) => {
        prevState.strict = true
        strickButton.style.background = "red"
      });
    } else {
      this.setState((prevState) => {
        prevState.strict = false
        strickButton.style.background = "blue"
      });
    }
    
  }
}

  render() {
    return (
      <div className="outer">
         <PlayButtons buttonClick={this.playerClick}
                      mouseDown={this.mouseDown} 
                      mouseUp={this.mouseUp}/>
      <div className="play-area">
        <h1 style={{"color": "white","textAlign":"center"}}>Simon</h1>
        <div className="start-strict">
          <Start startClick={this.startClick}
                  resetClick={this.reset}
                  gameOn={this.state.gameOn}/>
          <StrickModeButton strictClick={this.strictMode} />
           <StepCounter stepCounter={this.state.step} />
        </div>           
      </div>
      
      </div>
    );
  }
}

export default Game;
