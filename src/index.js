import "./style.css";

async function getWeather() {
  const res = await fetch(
    "http://api.weatherapi.com/v1/forecast.json?key=c96a9b56719a4aba8d394112231805&q=Greece"
  );
  const data = await res.json();
  console.log(data);
}

getWeather();
