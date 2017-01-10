if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(success, error);
}

function success(position) {
    let lat = position.coords.latitude;
    let lng = position.coords.longitude;
    getLocation(position.coords.latitude, position.coords.longitude);
    getWeather(position.coords.latitude, position.coords.longitude);
}

function error() {
    console.log("HANDLE YOUR ERROR!")
}

function getLocation(lat, lng) {
    let latlng = lat + "," + lng;
    let url = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&key=AIzaSyCV0lUcxVbZ2LF85MO3DspYeLGtP8msw5w";
    let request = new XMLHttpRequest();
    request.open('GET', url, true);

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {

            let data = JSON.parse(request.responseText);
            showLocation(data)
        } else {
            // We reached our target server, but it returned an error
            console.log("ERROR");
        }
    };

    request.onerror = function() {
        // There was a connection error of some sort
        console.log("ERROR");
    };
    request.send();
}

function getWeather(lat, lng) { 
    let requestAPI = "https://api.darksky.net/forecast/beb63f8dd4ce3d42dbd2ecc39ec87354/" + lat + "," + lng;

    let request = new XMLHttpRequest();
    request.open('GET', requestAPI, true);
    //request.setRequestHeader('Access-Control-Allow-Origin', ''http://127.0.0.1:8887' ');
    request.withCredentials = false;
    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {

            let data = JSON.parse(request.responseText);
        } else {
            // We reached our target server, but it returned an error
            console.log("ERROR");
        }
        console.log(data)
    };

    request.onerror = function() {
        // There was a connection error of some sort
        console.log("ERROR");
    };
    request.send();
}





function showLocation(data) {

    document.getElementById("city").innerText = data.results[1].formatted_address;
}