import { getCurrentWeather } from "./data";

const condition = document.querySelector(".condition");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const localTime = document.querySelector(".local-time");
const lastUpdated = document.querySelector(".last-updated");

async function displayCurrentWeather(temp, searchTerm) {
  const info = await getCurrentWeather(temp, searchTerm);
  condition.textContent = info.condition;
  if (temp == "c") {
    temperature.textContent = info.temp + "°C";
  } else {
    temperature.textContent = info.temp + "°F";
  }
  wind.textContent = info.wind + "kph";
  humidity.textContent = info.humidity;
  city.textContent = info.city;
  country.textContent = info.country;
  localTime.textContent = info.localTime;
  lastUpdated.textContent = info.lastUpdated;
}

export { displayCurrentWeather };
