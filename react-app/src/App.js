import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state ={
      a: ""
    }
  }
  update(){
    this.setState({
      a: this.refs.a.value,
      b: this.refs.b.value
    })
  }
  render() {
    return (
      <div>
      <input
        ref="a"
        onChange={(e) => this.update(e)}
        type="text"
        />
      <br/>
      {this.state.a}
      <hr/>
      <input
        ref="b"
        onChange={(e) => this.update(e)}
        type="text"
        />
      <br/>
      {this.state.b}
      </div>
    )
  }
}

export default App;
