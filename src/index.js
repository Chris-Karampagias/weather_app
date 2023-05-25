import "./style.css";
import { displayCurrentWeather, displayWeatherForecast } from "./dom";

const form = document.querySelector("form");
const input = document.querySelector("input");
const select = document.querySelector("select");
const searchButton = document.querySelector("button");

displayCurrentWeather("c", "athens");
displayWeatherForecast("c", "athens");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayCurrentWeather(select.value, input.value);
  displayWeatherForecast(select.value, input.value);
});
