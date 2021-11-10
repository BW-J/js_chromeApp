const API_KEY = "262dd2bbd1a4009c2f03ea229b770da4";


function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&unit=metric`;
    const citySpan = document.querySelector("#weather-div span:first-child");
    const weatherSpan = document.querySelector("#weather-div span:last-child");

    fetch(url).then(response => response.json()).then(data => {
        citySpan.innerText = data.name;;
        weatherSpan.innerText = data.weather[0].main;;
    });
}

function onGeoError(){
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);