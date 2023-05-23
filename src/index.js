import "./style.css";
import { displayCurrentWeather } from "./dom";

const form = document.querySelector("form");
const input = document.querySelector("input");
const select = document.querySelector("select");
const searchButton = document.querySelector("button");

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  displayCurrentWeather(select.value, input.value);
});
