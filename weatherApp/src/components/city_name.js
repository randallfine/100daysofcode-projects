import React, {Component} from 'react';
//import Location from "./location"

class CityName extends Component {
  constructor(){
    super();
    this.state = {}

    console.log(this.props)
  }

  // componentDidMount() {
  //   console.log("will")
  //   Loc(this.props.lat, this.props.lng)
  //   console.log(this.props);
  //   console.log(this.state)
  // }
  // componentDidMount() {
  //   console.log("did")
  //   console.log(this.props.lat);
  //   console.log(this.state)
  // }



    render(){
      return <h1>{this.props.lat}</h1>
    }
}



export default CityName
