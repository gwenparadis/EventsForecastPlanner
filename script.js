//fetch request to get weather forecast information
//declare global variables
const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("userInput");

//fetch request to get weather forecast information
function getCurrentLocationWeather() {
    //grab API url
    const forecastUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + (userInput.value) + 'US&appid=6f4f8d8e13827c9d81f342b6e1821c12';

    fetch(forecastUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            lat = data[0].lat;
            lon = data[0].lon;

            console.log('the latitude and longitude coordinates are: ' + lat + " ," + lon);

            const currentWeatherUrl = 'http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + lon + '&units=imperial&APPID=6f4f8d8e13827c9d81f342b6e1821c12';
            return fetch(currentWeatherUrl);
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            console.log(data.main);
        })
        .catch(function (error) {
            console.log(error);
        });
};

//Add Event Listener on the Search Button
searchBtn.addEventListener('click', getCurrentLocationWeather);


// SeatGeek API

// Current API URL calls 10 results within 12 miles of user's location
const requestEventUrl = 'https://api.seatgeek.com/events/?client_id=MzAxMTEzMjh8MTY2NzUxOTY1My4wNDQyMzY3&geoip=true&range=12mi&per_page=10';

function getEventInfo(requestEventUrl) {

    fetch(requestEventUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.events.length; i++) {
                const lat = data.events[i].venue.location.lat;
                const lon = data.events[i].venue.location.lon;
                console.log(lat);
                console.log(lon);
            }
        })
        .catch(function (error) {
            console.log("There was an error.", error)
        });
}

getEventInfo(requestEventUrl);