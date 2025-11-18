function updateTime() {
  let cityElement = document.querySelector(".city-unit");
  if (cityElement) {
    let cityDateElement = cityElement.querySelector(".date");
    let cityTimeElement = cityElement.querySelector(".time .value");
    let cityTimeElementSmall = cityElement.querySelector(".time small");
    let cityCurrent = moment().tz("America/New_York");
    cityDateElement.innerHTML = cityCurrent.format("MMMM D, YYYY");
    cityTimeElement.innerHTML = cityCurrent.format("h:mm:ss");
    cityTimeElementSmall.innerHTML = cityCurrent.format("A");
  }

  let cityElementB = document.querySelector(".city-unit-b");
  if (cityElementB) {
    let cityDateElementB = cityElementB.querySelector(".date");
    let cityTimeElementB = cityElementB.querySelector(".time .value");
    let cityTimeElementSmallB = cityElementB.querySelector(".time small");
    let cityCurrentB = moment().tz("America/Monterrey");
    cityDateElementB.innerHTML = cityCurrentB.format("MMMM D, YYYY");
    cityTimeElementB.innerHTML = cityCurrentB.format("h:mm:ss");
    cityTimeElementSmallB.innerHTML = cityCurrentB.format("A");
  }

  let cityElementC = document.querySelector(".city-unit-c");
  if (cityElementC) {
    let cityDateElementC = cityElementC.querySelector(".date");
    let cityTimeElementC = cityElementC.querySelector(".time .value");
    let cityTimeElementSmallC = cityElementC.querySelector(".time small");
    let cityCurrentC = moment().tz("Europe/Madrid");
    cityDateElementC.innerHTML = cityCurrentC.format("MMMM D, YYYY");
    cityTimeElementC.innerHTML = cityCurrentC.format("h:mm:ss");
    cityTimeElementSmallC.innerHTML = cityCurrentC.format("A");
  }

  if (selectedCity) {
    let cityTime = moment().tz(selectedCity);
    let cityName = selectedCity.replace("_", " ").split("/")[1];
    let cityElement = document.querySelector(".cities");
    cityElement.innerHTML = `<div class="city-unit">
        <div>
          <div class="city">${cityName}</div>
          <div class="date">${cityTime.format("MMMM D, YYYY")}</div>
        </div>
        <div class="time"><span class="value">${cityTime.format(
          "h:mm:ss"
        )}</span> <small>${cityTime.format("A")}</small></div>
      </div>
      
      <a class="home" href="/">HOME</a>`;
  }
}

function updateCity(event) {
  value = event.target.value;
  if (value === "current") {
    selectedCity = moment.tz.guess();
  } else {
    selectedCity = value;
  }
  updateTime();
}

let selectedCity = null;
updateTime;
setInterval(updateTime, 1000);

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
