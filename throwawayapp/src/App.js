import React, {Component} from 'react';
import ContactCard from "./components/contact_card"
import Data from "./data"
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data: Data,
      selectedContact: null
    }

  }
  render(){
    return(
      <div className="main">
        <ContactCard data={this.state.data} />
      </div>
    )
  }
}
export default App;
