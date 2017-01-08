if ("geolocation" in navigator) {
    console.log("yay!");

    navigator.geolocation.getCurrentPosition(function(position) {
        //do_something(position.coords.latitude, position.coords.longitude);
        //getWeather(position.coords.latitude, position.coords.longitude);
        getLocation(position.coords.latitude, position.coords.longitude);
    });
} else {
    console.log("crud");
}

function getLocation(latlng) {
    //var latlng = lat + "," + lng
    var geoAPI = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latlng + "&key=AIzaSyCV0lUcxVbZ2LF85MO3DspYeLGtP8msw5w";
    var request = new XMLHttpRequest();
    request.open('POST', geoAPI, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(data);
    console.log(data)
        // $.post(geoAPI, function(results) {
        //   for (var i = 0; i < results.results.length; i++) {
        //     var myAddress = results.results[1].formatted_address;

    //   }
    //   document.getElementById("city").text = myAddress
    //   $("#city").html(myAddress)
    // });  
}