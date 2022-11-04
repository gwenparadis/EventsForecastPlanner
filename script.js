//declare global variables
const searchBtn = document.getElementById("search")

//fetch request to get weather forecast information
function getCurrentWeather() {
    //grab API url
    const forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=6f4f8d8e13827c9d81f342b6e1821c12';

    fetch(forecastUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            for (let i = 0; i < data.length; i++) {
            console.log(data);
            //let weatherEl = document.createElement('li');
            //weatherEl.textContent = data.html_url;
            //weatherEl.appendChild(weatherEl);
            }
        });
};

//Add Event Listener on the Search Button
searchBtn.addEventListener('click', getCurrentWeather());
