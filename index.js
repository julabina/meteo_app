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
