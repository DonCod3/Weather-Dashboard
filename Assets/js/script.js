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
    localStorage.setItem("searches,", JSON.stringify(searches))
}