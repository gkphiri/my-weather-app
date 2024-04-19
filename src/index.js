function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.city;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("description");
  let humidityElement = document.querySelector("#humidity");

  cityElement.innerHTML = response.data.temperature.city;

  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  Event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");

  let apiKey = "d5b8b088efba45fe37c3af7t975co9d8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
  axios.get(apiUrl).then(refreshWeather);
}

let searchInput = document.querySelector("#search-form");
searchInput.addEventListener("submit", searchCity);
