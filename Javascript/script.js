// http://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=0b58d2e4fda20e7f139806a12aba40d1
// Set default data

// Current day variables
var cityDate = $("#city-date");   // REEXAMINE THIS
var currentDay = moment().format('L');
var icon = $("#weather-icon");
var temp = $("#temperature");
var humidity = $("#humidity");
var wind = $("#wind-speed");
var uv = $("#uv");

// Forecast variables
var day1 = $("#future-1");
var day2 = $("#future-2");
var day3 = $("#future-3");
var day4 = $("#future-4");
var day5 = $("#future-5");

// Get and display current date
cityDate.text(currentDay);
$(".card").prepend(cityDate);

// Search button on-click event
$("button").on("click", function () {
    var city = $(this).attr("data-city");
    var APIKey = "&appid=0b58d2e4fda20e7f139806a12aba40d";
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" +
        city + APIKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;

            // Get current day data
            // temp.text("Temperature: " + results.wind.temperature);
            // humidity.text("Humidity: " + response.main.humidity);
            // wind.text("Wind Speed: " + response.main.humidity);
            // uv.text("UV Index: " + response.main.humidity);

            // Append DOM elements
           

        });
});
