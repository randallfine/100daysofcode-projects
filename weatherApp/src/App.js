import React, { Component } from 'react';
import CityName from "./components/city_name";
//import {getLocation} from "./components/location"
//import logo from './logo.svg';
//import './App.css';
const Data = {
   "results" : [
      {
         "address_components" : [
            {
               "long_name" : "277",
               "short_name" : "277",
               "types" : [ "street_number" ]
            },
            {
               "long_name" : "Bedford Avenue",
               "short_name" : "Bedford Ave",
               "types" : [ "route" ]
            },
            {
               "long_name" : "Williamsburg",
               "short_name" : "Williamsburg",
               "types" : [ "neighborhood", "political" ]
            },
            {
               "long_name" : "Brooklyn",
               "short_name" : "Brooklyn",
               "types" : [ "sublocality", "political" ]
            },
            {
               "long_name" : "Kings",
               "short_name" : "Kings",
               "types" : [ "administrative_area_level_2", "political" ]
            },
            {
               "long_name" : "New York",
               "short_name" : "NY",
               "types" : [ "administrative_area_level_1", "political" ]
            },
            {
               "long_name" : "United States",
               "short_name" : "US",
               "types" : [ "country", "political" ]
            },
            {
               "long_name" : "11211",
               "short_name" : "11211",
               "types" : [ "postal_code" ]
            }
         ],
         "formatted_address" : "277 Bedford Avenue, Brooklyn, NY 11211, USA",
         "geometry" : {
            "location" : {
               "lat" : 40.714232,
               "lng" : -73.9612889
            },
            "location_type" : "ROOFTOP",
            "viewport" : {
               "northeast" : {
                  "lat" : 40.7155809802915,
                  "lng" : -73.9599399197085
               },
               "southwest" : {
                  "lat" : 40.7128830197085,
                  "lng" : -73.96263788029151
               }
            }
         },
         "place_id" : "ChIJd8BlQ2BZwokRAFUEcm_qrcA",
         "types" : [ "street_address" ]
      },
   ],
   "status" : "OK"
}
class App extends Component {
  constructor(props){
    super(props);
    this.state={}

    navigator.geolocation.getCurrentPosition((position)=>{
     this.setState({
       lat: position.coords.latitude,
       lng:position.coords.longitude
     })
     //this.GetLocation(this.state.lat, this.state.lng)
     this.GetWeather(this.state.lat, this.state.lng)
   })
  }

   GetLocation(lat, lng){
      let latlng = `${lat},${lng}`
      const key = "&key=AIzaSyCV0lUcxVbZ2LF85MO3DspYeLGtP8msw5w"
      const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
      const geoAPI = `${url}${latlng}${key}`

      const request = new XMLHttpRequest();
      request.open('POST', geoAPI, true);
      request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      request.onload = () => {
      if (request.status >= 200 && request.status < 400) {
        // Success!
        let data = request.responseText

        console.log(data.results[0].formatted_address)
        // this.setState ({
        //   loc: request.responseText.results
        // })
      }
    };

    request.send();
  }

  GetWeather(lat, lng){
  var requestAPI = "https://api.forecast.io/forecast/beb63f8dd4ce3d42dbd2ecc39ec87354/" + lat + "," + lng;
 var request = new XMLHttpRequest();
request.open('GET',requestAPI, true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

request.onload = function() {
 if (request.status >= 200 && request.status < 400) {
   // Success!
   var resp = request.responseText;
   console.log(resp)
 } else {
   // We reached our target server, but it returned an error

 }
};

request.onerror = function() {
 // There was a connection error of some sort
};

request.send();
  }


  render() {

console.log(Data.results[0].formatted_address)
    return (
      <div className="app">
      <h1 id="title">Your Local Weather</h1>
      <CityName lat={this.state.lat} lng={this.state.lng}/>
      <div className="container-fluid current">
        <div className="jumbotron">
          <h3 id="city">Your City</h3>
          <h3 id="dayOfWeek"></h3>
          <h3 id="date"><span id="month">MM</span> <span id="day">DD</span>, <span id="year">YY</span></h3>

          <h3><span id="time"></span></h3>

          <h3 id="temp-title">The Current Temperature Is</h3>

          <h1><span id="theTemp">00</span></h1>

          <h3>Right Now</h3>
          <h2><span id="condition">condition</span></h2>
        </div>
    </div>
 </div>
    )
  }
}

export default App;
