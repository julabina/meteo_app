let trainel, paris;

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
    console.log(paris);
  });

const test = (city) => {
  let sunriseTimestamp = city.current.sunrise;
  let date = new Date(sunriseTimestamp);
  console.log(sunriseTimestamp);
  console.log(date);
  console.log(date.getHours());
  console.log(date.getMinutes());
  console.log(date.getSeconds());
  let sunsetTimestamp = city.current.sunset;
  let date2 = new Date(sunsetTimestamp);
  console.log(sunsetTimestamp);
  console.log(date2);
  console.log(date2.getHours());
  console.log(date2.getMinutes());
  console.log(date2.getSeconds());
  let sunriseD0Timestamp = city.daily[0].moonrise;
  let date3 = new Date(sunriseD0Timestamp);
  console.log(sunriseD0Timestamp);
  console.log(date3);
  console.log(date3.getHours());
  console.log(date3.getMinutes());
  console.log(date3.getSeconds());
};
