// TO DO
// Get icons
// Streamline so that forecast data is looped
// Link city searches
// Local storage

// Current: https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=0b58d2e4fda20e7f139806a12aba40d1
// Forecast: https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=0b58d2e4fda20e7f139806a12aba40d1

// Current day variables
var cityDate = $("#date");
var currentDay = moment().format('l');
var cityName = $("#city-name")
var icon = $("#weather-icon"); // NEED TO GRAB ICON
var temp = $("#temperature");
var humidity = $("#humidity");
var wind = $("#wind-speed");
var description = $("#description");

// Forecast variables
var day1 = $("#future-1");
var day2 = $("#future-2");
var day3 = $("#future-3");
var day4 = $("#future-4");
var day5 = $("#future-5");

// Get and display current date
cityDate.text(currentDay);

// Set default city
getCityWeather("Baltimore");

function getCityWeather(city) {
    var APIKey = "&APPID=0b58d2e4fda20e7f139806a12aba40d1";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + "&units=imperial" + APIKey;
    var queryFutureURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city + "&units=imperial" + APIKey;

    // Get and display city search
    cityName.text(city);

    // Get current weather 
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            // icon.attr("src", "https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png");
            temp.text("Temperature: " + response.main.temp.toFixed(1) + " °F");
            humidity.text("Humidity: " + response.main.humidity + "%");
            wind.text("Wind Speed: " + response.wind.speed + " MPH");
            description.text("Description: " + response.weather[0].description);
        });

    // Get forecast weather
    $.ajax({
        url: queryFutureURL,
        method: "GET"
    })
        .then(function (response) {

            // Day 1
            var future1 = moment().add(1, 'day').format('l');
            day1.text(future1);
            // $("future-icon-1").text(response.list[0].weather.icon);;  // FIGURE OUT
            $("#future-temp-1").text("Temp: " + response.list[0].main.temp.toFixed(1) + " °F");
            $("#future-hum-1").text("Humidity: " + response.list[0].main.humidity + "%");

            // Day 2
            var future2 = moment().add(2, 'day').format('l');
            day2.text(future2);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-2").text("Temp: " + response.list[8].main.temp.toFixed(1) + " °F");
            $("#future-hum-2").text("Humidity: " + response.list[8].main.humidity + "%");

            // Day 3
            var future3 = moment().add(3, 'day').format('l');
            day3.text(future3);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-3").text("Temp: " + response.list[16].main.temp.toFixed(1) + " °F");
            $("#future-hum-3").text("Humidity: " + response.list[16].main.humidity + "%");

            // Day 4
            var future4 = moment().add(4, 'day').format('l');
            day4.text(future4);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-4").text("Temp: " + response.list[24].main.temp.toFixed(1) + " °F");
            $("#future-hum-4").text("Humidity: " + response.list[24].main.humidity + "%");

            // Day 5
            var future5 = moment().add(5, 'day').format('l');
            day5.text(future5);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-5").text("Temp: " + response.list[32].main.temp.toFixed(1) + " °F");
            $("#future-hum-5").text("Humidity: " + response.list[32].main.humidity + "%");
        });
}

// Search button on-click event
$("#find-city").on("click", function (event) {
    event.preventDefault();
    var city = $("#city-input").val().trim();
    getCityWeather(city);
});
