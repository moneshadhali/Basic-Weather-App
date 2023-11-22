let loc = document.getElementById("location");
let country = document.getElementById("country");
let tempIcon = document.getElementById("temp-icon");
let tempValue = document.getElementById("temp-value");
let climate = document.getElementById("climate");
let climateD = document.getElementById("climate-desc");
let iconFile;

function setWeatherIcon(id, tempIcon) {
  if (id < 250) {
    tempIcon.src = "./icons/storm.png";
  } else if (id < 350) {
    tempIcon.src = "./icons/drizzle.png";
  } else if (id < 550) {
    tempIcon.src = "./icons/rain.png";
  } else if (id < 650) {
    tempIcon.src = "./icons/snow.png";
  } else if (id < 800) {
    tempIcon.src = "./icons/atmosphere.png";
  } else if (id === 800) {
    tempIcon.src = "./icons/sun.png";
  } else if (id > 800) {
    tempIcon.src = "./icons/cloud (2).png";
  }
}

window.addEventListener("load", () => {
  let long;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      long = position.coords.longitude;
      lat = position.coords.latitude;
      const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=878398b5a1f68c708531aa266d743b2f`;
      fetch(api)
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          let { name } = data;
          let { feels_like } = data.main;
          let { id, main, description } = data.weather[0];
          let { country } = data.sys;
          loc.textContent = name;
          tempValue.textContent = Math.round(feels_like - 273);
          climate.textContent = main;
          climateD.textContent = `Weather like: ${description}`;
          country.textContent = `(${country})`;
          setWeatherIcon(id, tempIcon);
        });
    });
  }
});

// API used from https://openweathermap.org/
