let trainel, paris, sunrise, sunset, dt, today;

fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=48.41&lon=3.45&units=metric&appid=f0bc558c25b59fd4f095d9f96b29fb6c"
)
  .then((res) => res.json())
  .then((data) => {
    trainel = data;
    console.log(trainel);
  });

fetch(
  "https://api.openweathermap.org/data/2.5/onecall?lat=48.52&lon=2.19&units=metric&appid=f0bc558c25b59fd4f095d9f96b29fb6c"
)
  .then((res) => res.json())
  .then((data) => {
    paris = data;
  });

const convertTimeCurrent = (city) => {
  let sunriseTimestamp = city.current.sunrise;
  let sunsetTimestamp = city.current.sunset;
  let dtTimestamp = city.current.dt;
  dt = new Date(dtTimestamp * 1000);
  sunrise = new Date(sunriseTimestamp * 1000);
  sunset = new Date(sunsetTimestamp * 1000);
};

const Displaytest = (city) => {
  convertTimeCurrent(city);
  const currentSunriseContainer = document.querySelector(".sunrise");
  const currentSunsetContainer = document.querySelector(".sunset");
  const currentDt = document.querySelector(".currentTime");
  const currentImgWeather = document.querySelector(".weatherImg");
  const CurrentDescriptionWeather = document.querySelector(
    ".weatherDescription"
  );
  const currentTemp = document.querySelector(".temperature");
  const currentFeeling = document.querySelector(".feeling");
  const currentHumidity = document.querySelector(".humidity");
  const currentCloudiness = document.querySelector(".cloudiness");
  const currentUVIndex = document.querySelector(".UVIndex");
  const currentSpeedWind = document.querySelector(".windSpeed");
  const currentWindDeg = document.querySelector(".windDeg");

  let tempRounded, feelRounded;

  let dayStamp = dt.getDay();

  if (dayStamp === 0) {
  } else if (dayStamp === 1) {
    today = "Monday";
  } else if (dayStamp === 2) {
    today = "Tuesday";
  } else if (dayStamp === 3) {
    today = "Wednesday";
  } else if (dayStamp === 4) {
    today = "Thursday";
  } else if (dayStamp === 5) {
    today = "Friday";
  } else if (dayStamp === 6) {
    today = "Saturday";
  } else {
    today = "Sunday";
  }

  currentDt.textContent = dt.getHours() + "h" + dt.getMinutes() + "  " + today;
  currentSunriseContainer.textContent =
    "Sunrise : " + sunrise.getHours() + "h" + sunrise.getMinutes();
  currentSunsetContainer.textContent =
    "Sunset  : " + sunset.getHours() + "h" + sunset.getMinutes();
  currentIcon = city.current.weather[0].icon;
  description = city.current.weather[0].description;
  imgCurrent = "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
  currentImgWeather.innerHTML = `
  <img src="${imgCurrent}" alt="${description}">
  `;
  CurrentDescriptionWeather.textContent = city.current.weather[0].description;
  tempRounded = Math.round(city.current.temp);
  feelRounded = Math.round(city.current.feels_like);
  currentTemp.textContent = tempRounded;
  currentFeeling.textContent = feelRounded;
  currentHumidity.textContent = city.current.humidity + "%";
  currentCloudiness.textContent = city.current.clouds + "%";
  currentUVIndex.textContent = city.current.uvi;
  let speedWind = Math.round(city.current.wind_speed);
  let gustWind = Math.round(city.current.wind_gust);
  currentSpeedWind.textContent = speedWind + " - " + gustWind + " km/h";
  let windDegre = city.current.wind_deg;
  if (windDegre < 180) {
    console.log(windDegre);
    currentWindDeg.textContent = "South";
  } else {
    console.log(windDegre);
    currentWindDeg.textContent = "Nord";
  }
};
