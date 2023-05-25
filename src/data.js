const error = document.querySelector(".error");

async function getCurrentWeather(temp, searchTerm) {
  const res = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=c96a9b56719a4aba8d394112231805&q=${searchTerm}`
  );
  const data = await res.json();
  const info = data.current;
  const location = data.location;
  if (temp == "f") {
    return {
      condition: info.condition.text,
      temp: info.temp_f,
      wind: info.wind_kph,
      humidity: info.humidity,
      city: location.name,
      country: location.country,
      localTime: location.localtime,
      lastUpdated: info.last_updated,
    };
  }
  return {
    condition: info.condition.text,
    temp: info.temp_c,
    wind: info.wind_kph,
    humidity: info.humidity,
    city: location.name,
    country: location.country,
    localTime: location.localtime,
    lastUpdated: info.last_updated,
  };
}

async function getWeatherForecast(temp, searchTerm) {
  try {
    error.textContent = "";
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=c96a9b56719a4aba8d394112231805&q=${searchTerm}`
    );
    const data = await res.json();
    const hours = data.forecast.forecastday[0].hour;
    if (temp == "f")
      return {
        image9: hours[9].condition.icon,
        temp9: hours[9].temp_f,
        image12: hours[12].condition.icon,
        temp12: hours[12].temp_f,
        image15: hours[15].condition.icon,
        temp15: hours[15].temp_f,
        image18: hours[18].condition.icon,
        temp18: hours[18].temp_f,
        image21: hours[21].condition.icon,
        temp21: hours[21].temp_f,
        image23: hours[23].condition.icon,
        temp23: hours[23].temp_f,
      };
    return {
      image9: hours[9].condition.icon,
      temp9: hours[9].temp_c,
      image12: hours[12].condition.icon,
      temp12: hours[12].temp_c,
      image15: hours[15].condition.icon,
      temp15: hours[15].temp_c,
      image18: hours[18].condition.icon,
      temp18: hours[18].temp_c,
      image21: hours[21].condition.icon,
      temp21: hours[21].temp_c,
      image23: hours[23].condition.icon,
      temp23: hours[23].temp_c,
    };
  } catch {
    error.textContent = "Woops! Something went wrong!";
  }
}

export { getCurrentWeather, getWeatherForecast };
