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

const DisplayTop = (city) => {
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
  const currentAlertContainer = document.querySelector(".alertContainer");

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
  currentHumidity.textContent = "Humidity : " + city.current.humidity + "%";
  currentCloudiness.textContent = "Cloudiness : " + city.current.clouds + "%";
  currentUVIndex.textContent = "UV " + city.current.uvi;

  let speedWind = Math.round(city.current.wind_speed);
  let gustWind = Math.round(city.current.wind_gust);
  currentSpeedWind.textContent = speedWind + " - " + gustWind + " km/h";
  let windDegre = city.current.wind_deg;
  if (windDegre >= 348 && windDegre <= 11) {
    currentWindDeg.textContent = "North";
  } else if (windDegre > 11 && windDegre < 33) {
    currentWindDeg.textContent = "North - North east";
  } else if (windDegre >= 33 && windDegre <= 56) {
    currentWindDeg.textContent = "North east";
  } else if (windDegre > 56 && windDegre < 78) {
    currentWindDeg.textContent = "East - North east";
  } else if (windDegre >= 78 && windDegre <= 101) {
    currentWindDeg.textContent = "East";
  } else if (windDegre > 101 && windDegre < 123) {
    currentWindDeg.textContent = "East - South east";
  } else if (windDegre >= 123 && windDegre <= 146) {
    currentWindDeg.textContent = "South east";
  } else if (windDegre > 146 && windDegre < 168) {
    currentWindDeg.textContent = "South - South east";
  } else if (windDegre >= 168 && windDegre <= 191) {
    currentWindDeg.textContent = "South";
  } else if (windDegre > 191 && windDegre < 213) {
    currentWindDeg.textContent = "South - South West";
  } else if (windDegre >= 213 && windDegre <= 236) {
    currentWindDeg.textContent = "South West";
  } else if (windDegre > 236 && windDegre < 258) {
    currentWindDeg.textContent = "West - South West";
  } else if (windDegre >= 258 && windDegre <= 281) {
    currentWindDeg.textContent = "West";
  } else if (windDegre > 281 && windDegre < 303) {
    currentWindDeg.textContent = "West - North west";
  } else if (windDegre >= 303 && windDegre <= 326) {
    currentWindDeg.textContent = "North west";
  } else {
    currentWindDeg.textContent = "North - North west";
  }

  let alert = city.alerts.length;
  if (alert === 0) {
    currentAlertContainer.textContent = "No alerts now ";
  } else if (alert === 1) {
    currentAlertContainer.textContent = alert + " alert now ";
  } else {
    currentAlertContainer.textContent = alert + " alerts now ";
  }
};

const displayWeek = (city) => {
  const weekTitlesDays = document.querySelectorAll(".weekTitle");
  const weekDatesDays = document.querySelectorAll(".weekDate");
  const weekImagesDays = document.querySelectorAll(".weekImage");
  const weekTempsDays = document.querySelectorAll(".weekTemp");
  const weekWindsDays = document.querySelectorAll(".weekWind");
  const weekWindSpeedsDays = document.querySelectorAll(".weekWindSpeed");

  for (i = 1; i < city.daily.length; i++) {
    a = i - 1;
    weekDtTimestamp = city.daily[i].dt;
    weekDt = new Date(weekDtTimestamp * 1000);
    let weekToday, weekMonth;
    let weekDayNumber = weekDt.getDate();
    let weekDayStamp = weekDt.getDay();
    let weekMonthStamp = weekDt.getMonth();

    if (weekDayStamp === 0) {
      weekToday = "Sunday";
    } else if (weekDayStamp === 1) {
      weekToday = "Monday";
    } else if (weekDayStamp === 2) {
      weekToday = "Tuesday";
    } else if (weekDayStamp === 3) {
      weekToday = "Wednesday";
    } else if (weekDayStamp === 4) {
      weekToday = "Thursday";
    } else if (weekDayStamp === 5) {
      weekToday = "Friday";
    } else if (weekDayStamp === 6) {
      weekToday = "Saturday";
    }
    if (i === 1) {
      weekTitlesDays[0].textContent = "Tomorrow";
    } else {
      weekTitlesDays[a].textContent = weekToday;
    }
    if (weekMonthStamp === 0) {
      weekMonth = "Jan";
    } else if (weekMonthStamp === 1) {
      weekMonth = "Feb";
    } else if (weekMonthStamp === 2) {
      weekMonth = "Mar";
    } else if (weekMonthStamp === 3) {
      weekMonth = "Apr";
    } else if (weekMonthStamp === 4) {
      weekMonth = "May";
    } else if (weekMonthStamp === 5) {
      weekMonth = "Jun";
    } else if (weekMonthStamp === 6) {
      weekMonth = "Jul";
    } else if (weekMonthStamp === 7) {
      weekMonth = "Aug";
    } else if (weekMonthStamp === 8) {
      weekMonth = "Sep";
    } else if (weekMonthStamp === 9) {
      weekMonth = "Oct";
    } else if (weekMonthStamp === 10) {
      weekMonth = "Nov";
    } else if (weekMonthStamp === 11) {
      weekMonth = "Dec";
    }
    weekDatesDays[a].textContent = weekMonth + " " + weekDayNumber;
    weekCurrentIcon = city.daily[a].weather[0].icon;
    weekDescription = city.daily[a].weather[0].description;
    weekImageDaily =
      "http://openweathermap.org/img/wn/" + weekCurrentIcon + "@2x.png";
    weekImagesDays[
      a
    ].innerHTML = `<img src="${weekImageDaily}" alt="${weekDescription}">`;
    let weekTempMax = Math.round(city.daily[a].temp.max);
    let weekTempMin = Math.round(city.daily[a].temp.min);
    weekTempsDays[a].innerHTML = `
    <p class="weekTempPara"><span class="weekTempMax">${weekTempMax}</span> / <span class="weekTempMin">${weekTempMin}</span></p>
    `;

    let weekWindDegre = city.daily[a].wind_deg;
    if (weekWindDegre >= 348 && weekWindDegre <= 11) {
      weekWindsDays[a].textContent = "N";
    } else if (weekWindDegre > 11 && weekWindDegre < 33) {
      weekWindsDays[a].textContent = "N-NE";
    } else if (weekWindDegre >= 33 && weekWindDegre <= 56) {
      weekWindsDays[a].textContent = "NE";
    } else if (weekWindDegre > 56 && weekWindDegre < 78) {
      weekWindsDays[a].textContent = "ENE";
    } else if (weekWindDegre >= 78 && weekWindDegre <= 101) {
      weekWindsDays[a].textContent = "E";
    } else if (weekWindDegre > 101 && weekWindDegre < 123) {
      weekWindsDays[a].textContent = "E-SE";
    } else if (weekWindDegre >= 123 && weekWindDegre <= 146) {
      weekWindsDays[a].textContent = "SE";
    } else if (weekWindDegre > 146 && weekWindDegre < 168) {
      weekWindsDays[a].textContent = "S-SE";
    } else if (weekWindDegre >= 168 && weekWindDegre <= 191) {
      weekWindsDays[a].textContent = "S";
    } else if (weekWindDegre > 191 && weekWindDegre < 213) {
      weekWindsDays[a].textContent = "S-SW";
    } else if (weekWindDegre >= 213 && weekWindDegre <= 236) {
      weekWindsDays[a].textContent = "SW";
    } else if (weekWindDegre > 236 && weekWindDegre < 258) {
      weekWindsDays[a].textContent = "W-SW";
    } else if (weekWindDegre >= 258 && weekWindDegre <= 281) {
      weekWindsDays[a].textContent = "W";
    } else if (weekWindDegre > 281 && weekWindDegre < 303) {
      weekWindsDays[a].textContent = "W-NW";
    } else if (weekWindDegre >= 303 && weekWindDegre <= 326) {
      weekWindsDays[a].textContent = "NW";
    } else {
      weekWindsDays[a].textContent = "N-NW";
    }
    let weekWindSpeed = Math.round(city.daily[a].wind_speed);
    let weekWindGust = Math.round(city.daily[a].wind_gust);
    weekWindSpeedsDays[a].textContent = weekWindSpeed + " - " + weekWindGust;
  }
};
