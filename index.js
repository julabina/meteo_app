const sunriseCurrentContainer = document.querySelector(".sunrise");
const sunsetCurrentContainer = document.querySelector(".sunset");

let trainel, paris, sunrise, sunset;

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
  sunrise = new Date(sunriseTimestamp * 1000);
  sunset = new Date(sunsetTimestamp * 1000);
};

const Displaytest = (city) => {
  const gpsCurrent = document.querySelector(".gpsLoca");
  const currentDt = document.querySelector(".currentTime");
  const imgWeather = document.querySelector(".weatherImg");
  let dtTimestamp = city.current.dt;
  let dt = new Date(dtTimestamp * 1000);
  let day;
  let dayStamp = dt.getDay();
  if (dayStamp === 0) {
  } else if (dayStamp === 1) {
    day = "Monday";
  } else if (dayStamp === 2) {
    day = "Tuesday";
  } else if (dayStamp === 3) {
    day = "Wednesday";
  } else if (dayStamp === 4) {
    day = "Thursday";
  } else if (dayStamp === 5) {
    day = "Friday";
  } else if (dayStamp === 6) {
    day = "Saturday";
  } else {
    day = "Sunday";
  }
  currentDt.textContent = dt.getHours() + "h" + dt.getMinutes() + "  " + day;
  sunriseCurrentContainer.textContent =
    "Sunrise : " + sunrise.getHours() + "h" + sunrise.getMinutes();
  sunsetCurrentContainer.textContent =
    "Sunset  : " + sunset.getHours() + "h" + sunset.getMinutes();
  test = city.current.weather[0].icon;
  description = city.current.weather[0].description;
  console.log(test);
  test2 = "http://openweathermap.org/img/wn/" + test + "@2x.png";
  console.log(description);
  imgWeather.innerHTML = `
  <img src="${test2}" alt="${description}">
  `;
};
