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