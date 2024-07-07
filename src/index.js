function displayTemperature(response) {
  let temperatureElement = document.querySelector(".temperatureNumber");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}
function searchCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector(".formsInput");
  let city = searchInput.value;
  let apiKey = "8d8ob1t4a343b0f13b62705ad423c092";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(displayTemperature);
}

let searchbutton = document.querySelector(".searchButton");
searchbutton.addEventListener("click", searchCity);

let date = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let weeekDay = days[date.getDay()];
let minute = date.getMinutes().toString().padStart(2, "0");
let hour = date.getHours();
let todayDate = `${weeekDay} ${hour}:${minute}`;

let currentTime = document.querySelector(".currentTime");
currentTime.innerHTML = `${todayDate}`;
