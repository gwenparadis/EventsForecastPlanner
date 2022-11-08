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
