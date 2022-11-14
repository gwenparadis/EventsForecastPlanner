//fetch request to get weather forecast information
//declare global variables
const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("userInput");
const eventContainer = document.getElementById("events");
const weatherContainer = document.getElementById("weather");

//fetch request to get weather forecast information
function getEvents() {
    //url to fetch the location from the user input entered into the search bar by the user, from the openweathermap API
    const locationUrl = 'https://api.openweathermap.org/geo/1.0/direct?q=' + (userInput.value) + 'US&appid=6f4f8d8e13827c9d81f342b6e1821c12';

    //fetch location
    fetch(locationUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            lat = data[0].lat;
            lon = data[0].lon;

            //fetch 10 events using the location fetched above
            //url to fetch the events from the seatgeek API
            const requestEventList = 'https://api.seatgeek.com/events/?client_id=MzAxMTEzMjh8MTY2NzUxOTY1My4wNDQyMzY3&lat=' + lat + '&lon=' + lon + '&range=12mi&per_page=10'
            return fetch(requestEventList)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            // populates event info to the page
            for (let i = 0; i < data.events.length; i++) {
                const eventName = document.createElement('h3')
                const eventVenue = document.createElement('p')
                const eventTime = document.createElement('p')
                eventName.setAttribute('id', 'event-name')
                eventVenue.setAttribute('id', 'event-venue')
                eventTime.setAttribute('id', 'event-time')
                eventName.textContent = data.events[i].performers[0].name;
                eventVenue.textContent = data.events[i].venue.name;
                eventTime.textContent = data.events[i].datetime_local;
                eventContainer.append(eventName);
                eventContainer.append(eventVenue, eventTime);
            }
            getEventWeather(data);
        })
        .catch(function (error) {
            console.log(error);
        })
};

function getEventWeather(data) {
    //get the local date and time for each event
    for (let i = 0; i < 1; i++) {
        //fetch the weather for the date/time/location for each event if event is within 5 days
        const eventLat = data.events[i].venue.location.lat;
        const eventLon = data.events[i].venue.location.lon;

        //url to fetch weather forecast from the API
        const getWeatherUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=" + eventLat + "&lon=" + eventLon + "&units=imperial&exclude=current,minutely,hourly,alerts&appid=6f4f8d8e13827c9d81f342b6e1821c12"
        fetch(getWeatherUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                const weatherDateTimeNow = document.createElement('h3');
                const weatherTempNow = document.createElement('p');
                const weatherHumidityNow = document.createElement('p');
                const weatherConditionsNow = document.createElement('p');
                const weatherWindNow = document.createElement('p');
                weatherDateTimeNow.textContent = data.list[0].dt_txt;
                weatherTempNow.textContent = "Temperature: " + data.list[0].main.temp + " F";
                weatherHumidityNow.textContent = "Humidity: " + data.list[0].main.humidity + "%";
                weatherConditionsNow.textContent = "Conditions: " + data.list[0].weather[0].description;
                weatherWindNow.textContent = "Wind Speed: " + data.list[0].wind.speed + " mph";
                weatherContainer.append(weatherDateTimeNow, weatherTempNow, weatherHumidityNow, weatherConditionsNow, weatherWindNow);

                const weatherDateTimeSecond = document.createElement('h3');
                const weatherTempSecond = document.createElement('p');
                const weatherHumiditySecond = document.createElement('p');
                const weatherConditionsSecond = document.createElement('p');
                const weatherWindSecond = document.createElement('p');
                weatherDateTimeSecond.textContent = data.list[8].dt_txt;
                weatherTempSecond.textContent = "Temperature: " + data.list[8].main.temp + " F";
                weatherHumiditySecond.textContent = "Humidity: " + data.list[8].main.humidity + "%";
                weatherConditionsSecond.textContent = "Conditions: " + data.list[8].weather[0].description;
                weatherWindSecond.textContent = "Wind Speed: " + data.list[8].wind.speed + " mph";
                weatherContainer.append(weatherDateTimeSecond, weatherTempSecond, weatherHumiditySecond, weatherConditionsSecond, weatherWindSecond);

                const weatherDateTimeThird = document.createElement('h3');
                const weatherTempThird = document.createElement('p');
                const weatherHumidityThird = document.createElement('p');
                const weatherConditionsThird = document.createElement('p');
                const weatherWindThird = document.createElement('p');
                weatherDateTimeThird.textContent = data.list[16].dt_txt;
                weatherTempThird.textContent = "Temperature: " + data.list[16].main.temp + " F";
                weatherHumidityThird.textContent = "Humidity: " + data.list[16].main.humidity + "%";
                weatherConditionsThird.textContent = "Conditions: " + data.list[16].weather[0].description;
                weatherWindThird.textContent = "Wind Speed: " + data.list[16].wind.speed + " mph";
                weatherContainer.append(weatherDateTimeThird, weatherTempThird, weatherHumidityThird, weatherConditionsThird, weatherWindThird);

                const weatherDateTimeFour = document.createElement('h3');
                const weatherTempFour = document.createElement('p');
                const weatherHumidityFour = document.createElement('p');
                const weatherConditionsFour = document.createElement('p');
                const weatherWindFour = document.createElement('p');
                weatherDateTimeFour.textContent = data.list[24].dt_txt;
                weatherTempFour.textContent = "Temperature: " + data.list[24].main.temp + " F";
                weatherHumidityFour.textContent = "Humidity: " + data.list[24].main.humidity + "%";
                weatherConditionsFour.textContent = "Conditions: " + data.list[24].weather[0].description;
                weatherWindFour.textContent = "Wind Speed: " + data.list[24].wind.speed + " mph";
                weatherContainer.append(weatherDateTimeFour, weatherTempFour, weatherHumidityFour, weatherConditionsFour, weatherWindFour);

                const weatherDateTimeFive = document.createElement('h3');
                const weatherTempFive = document.createElement('p');
                const weatherHumidityFive = document.createElement('p');
                const weatherConditionsFive = document.createElement('p');
                const weatherWindFive = document.createElement('p');
                weatherDateTimeFive.textContent = data.list[32].dt_txt;
                weatherTempFive.textContent = "Temperature: " + data.list[32].main.temp + " F";
                weatherHumidityFive.textContent = "Humidity: " + data.list[32].main.humidity + "%";
                weatherConditionsFive.textContent = "Conditions: " + data.list[32].weather[0].description;
                weatherWindFive.textContent = "Wind Speed: " + data.list[32].wind.speed + " mph";
                weatherContainer.append(weatherDateTimeFive, weatherTempFive, weatherHumidityFive, weatherConditionsFive, weatherWindFive);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
};

    //Add Event Listener on the Search Button
    searchBtn.addEventListener('click', getEvents);