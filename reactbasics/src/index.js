import React from "react";
import { render } from "react-dom";
import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true
    }

  }
    onGreet(){
      alert("Hello")
    }

    onChangeName(newName){
      this.setState({
        homeLink: newName
      });
    }

    onChangeHomeMounted(){
      this.setState({
        homeMounted: !this.state.homeMounted
      });
    }
    render() {
      let homeComponent = "";
      if(this.state.homeMounted){
        homeComponent = (
              <Home name={"Max"}
              initialAge={38}
              greet={this.onGreet}
              changeLink={(newName) => this.onChangeName(newName)}
              initalLinkName={this.state.homeLink}
        />)
      }
        return (
          <div className ="container">
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <Header homeLink={this.state.homeLink}/>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                {homeComponent}
              </div>
            </div>
            <hr/>
            <div className="row">
              <div className="col-xs-10 col-xs-offset-1">
                <button onClick={()=>this.onChangeHomeMounted()} className="btn btn-success">(Un)Mount Home Component</button>
              </div>
            </div>
          </div>
        );
    }
}


render(<App/>, window.document.getElementById("app"));
