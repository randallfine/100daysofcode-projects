 navigator.geolocation.getCurrentPosition(function(position){
  let lat =position.coords.latitude;
  let lng = position.coords.longitude;;
  //getWeather(lat,lng)
  getLocation(lat,lng)
})


function getLocation(lat,lng,) {
  let latlng = `${lat},${lng}`
  console.log(latlng)
  const key = "&key=AIzaSyCV0lUcxVbZ2LF85MO3DspYeLGtP8msw5w"
  const url = "https://maps.googleapis.com/maps/api/geocode/json?latlng="
  const geoAPI = `${url}${latlng}${key}`
  const request = new XMLHttpRequest();
  request.open('POST', geoAPI, true);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.onload = () => {
  if (request.status >= 200 && request.status < 400) {
    // Success!
      console.log(request.responseText)
      data = request.responseText
      callback(null,data)
  }
};

request.send();
}

export {data}
