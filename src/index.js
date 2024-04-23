function refreshWeather(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windSpeedElement = document.querySelector("#wind-speed");
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);
  let iconElement = document.querySelector("#icon");

  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  windSpeedElement.innerHTML = `${response.data.wind.speed}km/h`;
  timeElement.innerHTML = formatDate(date);
  temperatureElement.innerHTML = Math.round(temperature);
  iconElement.innerHTML = `<img
                src="${response.data.condition.icon_url}"
                class="weather-app-icon"/>`;

  getForecast(response.data.city);
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  return `${day}${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "d5b8b088efba45fe37c3af7t975co9d8";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(refreshWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  searchCity(searchInput.value);
}
function getForecast(city) {
  let apiKey = "d5b8b088efba45fe37c3af7t975co9d8";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key={apiKey}&unit=metric`;
  axios(apiUrl).then(displayForecast);
}
function displayForecast(response) {
  
  let days = ["Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  let forecast = ();

  days.forEach (function (day) {
  forecastHTML = forecastHTML +`
  <div class="weather-forecat-day">
            <div class="row"></div>
            <div class="col-2"></div>
            <div class="weather-forecast-date">${day}</div>
            <div class = "weather-forecast-icon>🌤️</div>
            <div class="weather-forecast-temperatures">
              <span class="weather-forecast-temperature-max">18°</span>
              <span class="weather-forecast-temperature-min">12°</span>
            </div>`;
            } );

let forecastElement = document.querySelector("#forecast");
forecastElement.innerHTML = forecastHTML;

}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

searchCity("Paris");

