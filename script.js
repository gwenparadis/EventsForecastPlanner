//fetch request to get weather forecast information
//declare global variables
const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("userInput");
const eventContainer = document.getElementById("events");

//fetch request to get weather forecast information
function getCurrentLocationWeather() {
    //grab API url
    const locationUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=' + (userInput.value) + 'US&appid=6f4f8d8e13827c9d81f342b6e1821c12';

    fetch(locationUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            lat = data[0].lat;
            lon = data[0].lon;

            console.log('the latitude and longitude coordinates are: ' + lat + " ," + lon);

            // Creates list of events using lat and lon grabbed from above

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
        })
        // This .then is for populating the info onto the page, may replace the above .then starting on line 30
        // UNDER CONSTRUCTION
        // .then(function (data) {
        //     for (let i = 0; i < data.events.length; i++) {
        //         const eventName = document.createElement('h3')
        //         const eventVenue = document.createElement('p')
        //         const eventTime = document.createElement('p')
        //         eventName.textContent = data.events[i].performers[0].name;
        //         eventVenue.textContent = data.events[i].venue.name;
        //         eventTime.textContent = data.events[i].datetime_local;
        //         eventContainer.append(eventName);
        //         eventContainer.append(eventVenue, '@', eventTime);
        //     }
        // })
        .catch(function (error) {
            console.log(error);
        });
};

//Add Event Listener on the Search Button
searchBtn.addEventListener('click', getCurrentLocationWeather);


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