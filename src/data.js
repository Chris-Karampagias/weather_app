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
export { getCurrentWeather };
