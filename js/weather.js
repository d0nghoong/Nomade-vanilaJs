const API_KEY = "0309c6643504b993bc5573a5be3a4a39";

function onGeoSuccess(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const cityContainer = document.querySelector("#weather span:first-child");
      const weatherContainer = document.querySelector(
        "#weather span:last-child"
      );
      cityContainer.innerText = data.name;
      weatherContainer.innerText = `${data.weather[0].main}/${data.main.temp}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);
