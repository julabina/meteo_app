const trainelBanner = document.querySelector(".bannerTrainel");
const parisBanner = document.querySelector(".bannerParis");
const sensBanner = document.querySelector(".bannerSens");
const londonBanner = document.querySelector(".bannerLondon");
const rainBtn = document.querySelector(".right-rainHours");
const alertBtn = document.querySelector(".right-alert");
const rainContainer = document.querySelector(".rainContainer");
const currentCity = document.getElementById("city");
const loadingContainer = document.querySelector(".overlayIconLoading");
let trainel, paris, sunrise, sunset, dt, today, cityName, cityLoad;
const APIKey = "f0bc558c25b59fd4f095d9f96b29fb6c";

/* fetch(
  `https://api.openweathermap.org/data/2.5/onecall?lat=48.41&lon=3.45&units=metric&appid=${APIKey}`
)
  .then((res) => res.json())
  .then((data) => {
    trainel = data;
    console.log(trainel);
  }); 
  
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=48.52&lon=2.19&units=metric&appid=${APIKey}`
    )
    .then((res) => res.json())
    .then((data) => {
      paris = data;
    });
    
    fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=48.11&lon=3.16&units=metric&appid=${APIKey}`
      )
      .then((res) => res.json())
      .then((data) => {
        sens = data;
      });
      
      fetch(
        `https://api.openweathermap.org/data/2.5/onecall?lat=51.30&lon=0.07&units=metric&appid=${APIKey}`
        )
        .then((res) => res.json())
        .then((data) => {
          london = data;
        }); */

async function trainelAsync(clicked) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=48.41&lon=3.45&units=metric&appid=${APIKey}`
  );
  let data = await res.json();
  trainel = data;
  if (clicked == true) {
    display(trainel);
  }
}

async function parisAsync(clicked) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=48.52&lon=2.19&units=metric&appid=${APIKey}`
  );
  let data = await res.json();
  paris = data;
  if (clicked == true) {
    display(paris);
  }
}

async function sensAsync(clicked) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=48.11&lon=3.16&units=metric&appid=${APIKey}`
  );
  let data = await res.json();
  sens = data;
  if (clicked == true) {
    display(sens);
  }
}

async function londonAsync(clicked) {
  let res = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=51.30&lon=0.07&units=metric&appid=${APIKey}`
  );
  let data = await res.json();
  london = data;
  if (clicked == true) {
    display(london);
  }
}

const displayBanner = () => {
  const trainelImg = document.querySelector(".trainelImg");
  const trainelTemp = document.querySelector(".trainelTemp");
  const parisImg = document.querySelector(".parisImg");
  const parisTemp = document.querySelector(".parisTemp");
  const sensImg = document.querySelector(".sensImg");
  const sensTemp = document.querySelector(".sensTemp");
  const londonImg = document.querySelector(".londonImg");
  const londonTemp = document.querySelector(".londonTemp");

  trainelIcon = trainel.current.weather[0].icon;
  trainelDescription = trainel.current.weather[0].description;
  imgTrainel = "http://openweathermap.org/img/wn/" + trainelIcon + "@2x.png";
  trainelImg.innerHTML = `
  <img src="${imgTrainel}" alt="${trainelDescription}">
  `;
  trainelMax = Math.round(trainel.daily[0].temp.max);
  trainelMin = Math.round(trainel.daily[0].temp.min);
  trainelTemp.innerHTML = `
  <p class="bannerTempPara"><span class="bannerTempMax">${trainelMax}°</span> / <span class="bannerTempMin">${trainelMin}°</span></p>
  `;

  parisIcon = paris.current.weather[0].icon;
  parisDescription = paris.current.weather[0].description;
  imgParis = "http://openweathermap.org/img/wn/" + parisIcon + "@2x.png";
  parisImg.innerHTML = `
  <img src="${imgParis}" alt="${parisDescription}">
  `;
  parisMax = Math.round(paris.daily[0].temp.max);
  parisMin = Math.round(paris.daily[0].temp.min);
  parisTemp.innerHTML = `
  <p class="bannerTempPara"><span class="bannerTempMax">${parisMax}°</span> / <span class="bannerTempMin">${parisMin}°</span></p>
  `;

  sensIcon = sens.current.weather[0].icon;
  sensDescription = sens.current.weather[0].description;
  imgSens = "http://openweathermap.org/img/wn/" + sensIcon + "@2x.png";
  sensImg.innerHTML = `
  <img src="${imgSens}" alt="${sensDescription}">
  `;
  sensMax = Math.round(sens.daily[0].temp.max);
  sensMin = Math.round(sens.daily[0].temp.min);
  sensTemp.innerHTML = `
  <p class="bannerTempPara"><span class="bannerTempMax">${sensMax}°</span> / <span class="bannerTempMin">${sensMin}°</span></p>
  `;

  londonIcon = london.current.weather[0].icon;
  londonDescription = london.current.weather[0].description;
  imgLondon = "http://openweathermap.org/img/wn/" + londonIcon + "@2x.png";
  londonImg.innerHTML = `
  <img src="${imgLondon}" alt="${londonDescription}">
  `;
  londonMax = Math.round(london.daily[0].temp.max);
  londonMin = Math.round(london.daily[0].temp.min);
  londonTemp.innerHTML = `
  <p class="bannerTempPara"><span class="bannerTempMax">${londonMax}°</span> / <span class="bannerTempMin">${londonMin}°</span></p>
  `;
};

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
  displayBanner();
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

  currentDtGetHour = dt.getHours();
  currentDtGetHour = ("0" + currentDtGetHour).slice(-2);
  currentDtGetMinute = dt.getMinutes();
  currentDtGetMinute = ("0" + currentDtGetMinute).slice(-2);
  sunriseDtGetHour = sunrise.getHours();
  sunriseDtGetHour = ("0" + sunriseDtGetHour).slice(-2);
  sunriseDtGetMinute = sunrise.getMinutes();
  sunriseDtGetMinute = ("0" + sunriseDtGetMinute).slice(-2);
  sunsetDtGetHour = sunset.getHours();
  sunsetDtGetHour = ("0" + sunsetDtGetHour).slice(-2);
  sunsetDtGetMinute = sunset.getMinutes();
  sunsetDtGetMinute = ("0" + sunsetDtGetMinute).slice(-2);

  currentDt.textContent =
    currentDtGetHour + "h" + currentDtGetMinute + "  " + today;
  currentSunriseContainer.textContent =
    "Sunrise : " + sunriseDtGetHour + "h" + sunriseDtGetMinute;
  currentSunsetContainer.textContent =
    "Sunset  : " + sunsetDtGetHour + "h" + sunsetDtGetMinute;
  currentIcon = city.current.weather[0].icon;
  description = city.current.weather[0].description;
  imgCurrent = "http://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
  currentImgWeather.innerHTML = `
  <img src="${imgCurrent}" alt="${description}">
  `;
  CurrentDescriptionWeather.textContent = city.current.weather[0].description;
  tempRounded = Math.round(city.current.temp);
  feelRounded = Math.round(city.current.feels_like);
  currentTemp.textContent = tempRounded + "°";
  currentFeeling.textContent = feelRounded + "°";
  currentHumidity.textContent = "Humidity : " + city.current.humidity + "%";
  currentCloudiness.textContent = "Cloudiness : " + city.current.clouds + "%";
  currentUVIndex.textContent = "UV " + city.current.uvi;

  let speedWind = Math.round(city.current.wind_speed);
  let gustWind = Math.round(city.current.wind_gust);

  if (isNaN(gustWind)) {
    currentSpeedWind.textContent = speedWind + " - " + speedWind + " km/h";
  } else {
    currentSpeedWind.textContent = speedWind + " - " + gustWind + " km/h";
  }
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

  if (city.alerts != undefined) {
    let alert = city.alerts.length;
    if (alert === 0) {
      currentAlertContainer.textContent = "No alerts now ";
    } else if (alert === 1) {
      currentAlertContainer.textContent = alert + " alert now ";
    } else {
      currentAlertContainer.textContent = alert + " alerts now ";
    }
  } else {
    currentAlertContainer.textContent = "No alerts now ";
  }
  currentCity.textContent = cityName;
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
    <p class="weekTempPara"><span class="weekTempMax">${weekTempMax}°</span> / <span class="weekTempMin">${weekTempMin}°</span></p>
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

const displayHours = (city) => {
  const hoursContainer = document.querySelectorAll(".hour");
  const hoursImg = document.querySelectorAll(".hoursImg");
  const hoursTemp = document.querySelectorAll(".hoursTemp");
  const hourDesc = document.querySelectorAll(".hourDesc");
  const hourFeeling = document.querySelectorAll(".hourFeeling");
  const hourDeg = document.querySelectorAll(".hourWindDeg");
  const hourSpeed = document.querySelectorAll(".hourWindSpeed");

  for (i = 0; i < city.hourly.length; i++) {
    let hourStamp = city.hourly[i].dt;
    hourDt = new Date(hourStamp * 1000);
    hour = hourDt.getHours();
    hour = ("0" + hour).slice(-2);
    hoursContainer[i].textContent = hour + "h00";
    hoursCurrentIcon = city.hourly[i].weather[0].icon;
    hoursDescription = city.hourly[i].weather[0].description;
    hoursImageDaily =
      "http://openweathermap.org/img/wn/" + hoursCurrentIcon + "@2x.png";
    hoursImg[i].innerHTML = `
    <img src="${hoursImageDaily}" alt="${hoursDescription}">
    `;
    tempHour = Math.round(city.hourly[i].temp);
    tempFeeling = Math.round(city.hourly[i].feels_like);
    hoursTemp[i].textContent = tempHour + "°";
    hourFeeling[i].textContent = tempFeeling + "°";
    hourDesc[i].textContent = city.hourly[i].weather[0].description;
    hourSpeed[i].textContent =
      Math.trunc(city.hourly[i].wind_speed) +
      " - " +
      Math.trunc(city.hourly[i].wind_gust) +
      " Km/H";

    let windDegre = city.hourly[i].wind_deg;
    if (windDegre >= 348 && windDegre <= 11) {
      hourDeg[i].textContent = "N";
    } else if (windDegre > 11 && windDegre < 33) {
      hourDeg[i].textContent = "N-NE";
    } else if (windDegre >= 33 && windDegre <= 56) {
      hourDeg[i].textContent = "NE";
    } else if (windDegre > 56 && windDegre < 78) {
      hourDeg[i].textContent = "ENE";
    } else if (windDegre >= 78 && windDegre <= 101) {
      hourDeg[i].textContent = "E";
    } else if (windDegre > 101 && windDegre < 123) {
      hourDeg[i].textContent = "E-SE";
    } else if (windDegre >= 123 && windDegre <= 146) {
      hourDeg[i].textContent = "SE";
    } else if (windDegre > 146 && windDegre < 168) {
      hourDeg[i].textContent = "S-SE";
    } else if (windDegre >= 168 && windDegre <= 191) {
      hourDeg[i].textContent = "S";
    } else if (windDegre > 191 && windDegre < 213) {
      hourDeg[i].textContent = "S-SW";
    } else if (windDegre >= 213 && windDegre <= 236) {
      hourDeg[i].textContent = "SW";
    } else if (windDegre > 236 && windDegre < 258) {
      hourDeg[i].textContent = "W-SW";
    } else if (windDegre >= 258 && windDegre <= 281) {
      hourDeg[i].textContent = "W";
    } else if (windDegre > 281 && windDegre < 303) {
      hourDeg[i].textContent = "W-NW";
    } else if (windDegre >= 303 && windDegre <= 326) {
      hourDeg[i].textContent = "NW";
    } else {
      hourDeg[i].textContent = "N-NW";
    }
  }
};

const displayRain = (city) => {
  const hourRainContainer = document.querySelectorAll(".hourRain");
  const precipitationContainer = document.querySelectorAll(".precipitation");

  a = 0;
  for (let i = 0; i <= 50; i += 10) {
    let rainStamp = city.minutely[i].dt;
    rainDt = new Date(rainStamp * 1000);
    rainDtHour = rainDt.getHours();
    rainDtHour = ("0" + rainDtHour).slice(-2);
    rainDtMinute = rainDt.getMinutes();
    rainDtMinute = ("0" + rainDtMinute).slice(-2);
    hourRainContainer[a].textContent = rainDtHour + "h" + rainDtMinute;
    precipitationContainer[a].textContent =
      "Precipitation : " + Math.trunc(city.minutely[i].precipitation) + " %";
    a++;
  }
};

const displayAlert = (city) => {
  const alertContainer = document.querySelector(".alertMessageContainer");
  const alertName = document.querySelector(".alertCityName");
  console.log(alertName);
  console.log(alertContainer);
  alertName.textContent = cityName;
  alertContainer.innerHTML = `<p>hello</p>`;
};

const alertPop = (city) => {
  let alertWindow = window.open(
    "alert.html",
    "alert",
    "width=auto,height=auto,menubar = no, scrollbars = no, location = no"
  );
  alertWindow.document.write('<link rel="stylesheet" href="style.css">');
  alertWindow.document.write("<title>" + cityName + " alerts</title>");
  alertWindow.document.write(
    '<body> <h1 style="text-align : center">' +
      cityName +
      " alerts </h1><br><br><br>"
  );

  for (i = 0; i < city.alerts.length; i++) {
    alertEvent = city.alerts[i].event;
    alertSender = city.alerts[i].sender_name;
    alertDescription = city.alerts[i].description;

    alertWindow.document.write(
      '<h2 style="text-align : center">' + alertEvent + "</h2><br><br><br>"
    );
    alertWindow.document.write(
      '<p style="margin : 0 40px 0 40px">Alert by ' +
        alertSender +
        "</p><br><br>"
    );
    alertWindow.document.write(
      '<p style="margin : 0 40px 0 40px">' + alertDescription + "</p><br><br>"
    );
  }
  alertWindow.document.write("</body>");
};

const display = (city) => {
  DisplayTop(city);
  displayWeek(city);
  displayHours(city);
  displayRain(city);
};

const alertDefined = (city) => {
  let alertss = city.alerts;
  if (alertss === undefined) {
    alert("No alerts for now");
  } else {
    alertPop(city);
  }
};

trainelBanner.addEventListener("click", () => {
  cityName = "Trainel";
  cityLoad = "trainel";
  trainelAsync(true);
});

parisBanner.addEventListener("click", () => {
  cityName = "Paris";
  cityLoad = "paris";
  parisAsync(true);
});

sensBanner.addEventListener("click", () => {
  cityName = "Sens";
  cityLoad = "sens";
  sensAsync(true);
});

londonBanner.addEventListener("click", () => {
  cityName = "London";
  cityLoad = "london";
  londonAsync(true);
});

rainBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (rainContainer.classList.contains("invisible")) {
    rainContainer.classList.remove("invisible");
    rainBtn.classList.add("focusBackground");
  } else {
    rainContainer.classList.add("invisible");
    rainBtn.classList.remove("focusBackground");
  }
});

alertBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (cityLoad == "sens") {
    alertDefined(sens);
  } else if (cityLoad == "paris") {
    alertDefined(paris);
  } else if (cityLoad == "london") {
    alertDefined(london);
  } else if (cityLoad == "trainel") {
    alertDefined(trainel);
  }
});

const allAsync = () => {
  trainelAsync();
  parisAsync();
  londonAsync();
  sensAsync();
};

allAsync();

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      let long = position.coords.longitude;
      let lat = position.coords.latitude;
      allAsync();
      APICall(long, lat);
    },
    () => {
      allAsync();
      cityName = "Paris";
      cityLoad = "paris";
      display(paris);
      loadingContainer.classList.add("iconInvisible");
      setTimeout(invisibleIcon, 1000);
      alert("Please enable location on your browser");
    }
  );
}

const invisibleIcon = () => {
  loadingContainer.classList.add("invisible");
};

const APICall = (long, lat) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&units=metric&appid=${APIKey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      currentGeoCity = data;
      display(currentGeoCity);
      cityName = currentGeoCity.timezone;
      currentCity.textContent = cityName;
    });

  loadingContainer.classList.add("iconInvisible");
  setTimeout(invisibleIcon, 1000);
};
