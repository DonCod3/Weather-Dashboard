let searches = [];

//save the users search history
let saveSearchHist = function(city) {
    let historydiv = document.querySelector("#searchHistory");
    let historyBtn = document.createElement("button");
    historyBtn.classList = "history mb-15 round";
    historyBtn.textContent = city;
    historydiv.appendChild(historyBtn);

    if(searches) {
        searches.push(city);
    } else {
        searches = []
        searches[0] = city;
    };
    localStorage.setItem("searches,", JSON.stringify(searches));
};


let checkSearch = function(city) {
    if(!searches) {
        saveSearchHist(city);
    } else {
        // prevent duplicates in searches array
        for(let i = 0; i < searches.length; i++) {
            if(searches[i] == city) {
                return;
            }
        }
        saveSearchHist(city);
    }
};


let loadDailyWeather = function(data, i) {
    // select all tempFuture  id's as span elements
    let spanTemp = document.querySelectorAll("#tempFuture");
    let lastTemp = spanTemp[spanTemp.length - 1];
    lastTemp.textContent = data.daily[i].temp.day + "°F";

    let spanWind = document.querySelectorAll("#windFuture");
    let lastWind = spanWind[spanWind.length - 1];
    lastWind.textContent = data.daily[i].wind_speed + " mph";

    let spanHumid = document.querySelectorAll("#humidFuture");
    let lastHumid = spanHumid[spanHumid.length - 1];
    lastHumid.textContent = data.daily[i].humidity + "%";
}

let cityCords = function(city, data) {
    let lat = data.coord.lat;
    let lon = data.coord.lon;
    let apiUrl = "https://api.openweathermap.org/data/2.5/forecast?lat" = +lat + "&lon=" + lon + "&appid=1b3e400964317cdeb0bc6eb9c6ca7632"; 

    fetch(apiUrl).then(function(response) {
        if(response.ok) {
            response.json().then(function(data) {
                getCurrentWeather(city, data);
            })
        } else {
            apiError();
        }
    })
};