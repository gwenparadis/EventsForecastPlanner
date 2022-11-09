//fetch request to get weather forecast information
//declare global variables
const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("userInput");

//fetch request to get weather forecast information
function getEvents() {
    //url to fetch the location from the user input entered into the search bar by the user, from the openweathermap API
    const locationUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + (userInput.value) + 'US&appid=6f4f8d8e13827c9d81f342b6e1821c12';

    //fetch location
    fetch(locationUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            lat = data[0].lat;
            lon = data[0].lon;
            console.log('the latitude and longitude coordinates are: ' + lat + " ," + lon);

            //fetch 10 events using the location fetched above
            //url to fetch the events from the seatgeek API
            const requestEventList = 'https://api.seatgeek.com/events/?client_id=MzAxMTEzMjh8MTY2NzUxOTY1My4wNDQyMzY3&lat=' + lat + '&lon=' + lon + '&range=12mi&per_page=10'
            return fetch(requestEventList)
        })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            for (let i = 0; i < data.events.length; i++) {
                const eventName = data.events[i].performers[0].name;
                const eventVenue = data.events[i].venue.name;
                const eventTime = data.events[i].datetime_local;
                console.log(eventName, eventVenue, eventTime);

            }
            getEventWeather(data);
        })
        .catch(function (error) {
            console.log(error);
        })
};

function getEventWeather(data) {
    //make sure the function is using the right data:
    console.log(data);
    //get the local date and time for each event
    for (let i = 0; i < data.events.length; i++) {
        console.log(data.events[i].datetime_local);

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
                console.log(data);
            });
    };
};

    //Add Event Listener on the Search Button
    searchBtn.addEventListener('click', getEvents);


// SeatGeek API -- If time left, will use this to display local events when user loads app
// Still needs to grab event name and venue

// Current API URL calls 10 results within 12 miles of user's location
// const requestEventUrl = 'https://api.seatgeek.com/events/?client_id=MzAxMTEzMjh8MTY2NzUxOTY1My4wNDQyMzY3&geoip=true&range=12mi&per_page=10';

// function getEventInfo(requestEventUrl) {

    // fetch(requestEventUrl)
    //     .then(function (response) {
    //         return response.json();
    //     })
    //     .then(function (data) {
    //         console.log(data);
    //         for (let i = 0; i < data.events.length; i++) {
    //             const eventName = data.events[i].performers[0].name;
    //             const eventVenue = data.events[i].venue.name;
    //             const eventTime = data.events[i].datetime_local;
    //             console.log(eventName, eventVenue, eventTime);
    //         }
    //     })
    //     .catch(function (error) {
    //         console.log("There was an error.", error)
    //     });
// };

// getEventInfo(requestEventUrl);