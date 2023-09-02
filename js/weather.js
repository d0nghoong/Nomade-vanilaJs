const API_KEY = "0309c6643504b993bc5573a5be3a4a39";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
  console.log(url);
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
