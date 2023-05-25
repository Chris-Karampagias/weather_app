import { getCurrentWeather, getWeatherForecast } from "./data";

const condition = document.querySelector(".condition");
const temperature = document.querySelector(".temperature");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const city = document.querySelector(".city");
const country = document.querySelector(".country");
const localTime = document.querySelector(".local-time");
const lastUpdated = document.querySelector(".last-updated");
const img9 = document.querySelector(".img-9");
const temp9 = document.querySelector(".temperature-9");
const img12 = document.querySelector(".img-12");
const temp12 = document.querySelector(".temperature-12");
const img15 = document.querySelector(".img-15");
const temp15 = document.querySelector(".temperature-15");
const img18 = document.querySelector(".img-18");
const temp18 = document.querySelector(".temperature-18");
const img21 = document.querySelector(".img-21");
const temp21 = document.querySelector(".temperature-21");
const img23 = document.querySelector(".img-23");
const temp23 = document.querySelector(".temperature-23");

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

async function displayWeatherForecast(temp, searchTerm) {
  const info = await getWeatherForecast(temp, searchTerm);
  img9.src = info.image9;
  img12.src = info.image12;
  img15.src = info.image15;
  img18.src = info.image18;
  img21.src = info.image21;
  img23.src = info.image23;
  if (temp == "f") {
    temp9.textContent = info.temp9 + "°F";
    temp12.textContent = info.temp12 + "°F";
    temp15.textContent = info.temp15 + "°F";
    temp18.textContent = info.temp18 + "°F";
    temp21.textContent = info.temp21 + "°F";
    temp23.textContent = info.temp23 + "°F";
  } else {
    temp9.textContent = info.temp9 + "°C";
    temp12.textContent = info.temp12 + "°C";
    temp15.textContent = info.temp15 + "°C";
    temp18.textContent = info.temp18 + "°C";
    temp21.textContent = info.temp21 + "°C";
    temp23.textContent = info.temp23 + "°C";
  }
}

export { displayCurrentWeather, displayWeatherForecast };
