//declare global variables
const searchBtn = document.getElementById("search")
let weatherResult;

//fetch request to get weather forecast information
function getLocation() {
    //grab API url
    const forecastUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=boston,MA,US&appid=6f4f8d8e13827c9d81f342b6e1821c12';

    fetch(forecastUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            const lat = data[0].lat
            const lon = data[0].lon

            //variable for the correct weather API link
            //create fetch request for weather information from that lat lon data above
            //fetch(weatherUrl)

        });
};

//Add Event Listener on the Search Button
searchBtn.addEventListener('click', getLocation());
