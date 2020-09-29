// Current: https://api.openweathermap.org/data/2.5/weather?q=atlanta&appid=0b58d2e4fda20e7f139806a12aba40d1
// Forecast: https://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=0b58d2e4fda20e7f139806a12aba40d1

// Set default data

// Current day variables
var cityDate = $("#city-date"); 
var currentDay = moment().format('L');
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
$("#current-card").prepend(cityDate);

// Search button on-click event
$("#find-city").on("click", function (event) {
    event.preventDefault();

    var city = $("#city-input").val().trim();
    var APIKey = "&APPID=0b58d2e4fda20e7f139806a12aba40d1";
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" +
        city + APIKey;
    var queryFutureURL = "https://api.openweathermap.org/data/2.5/forecast?q=" +
        city + APIKey;

    // Get and display city search
    cityDate.prepend(city + " ");
    $("#current-card").append(+cityDate);

    // Function to convert from Celcius to Fahrenheit
    // function getFahrenheit (celcius) {
    //     (celcius - 273.15) * 1.80 + 32;
    // };

    // Get current data
    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            icon.text(response.weather[0].icon);  // FIGURE OUT
            var celTemp = response.main.temp;
            var Fahrenheit = ((celTemp - 273.15) * 1.80 + 32).toFixed(1);
            temp.text("Temperature: " + Fahrenheit + " °F");
            humidity.text("Humidity: " + response.main.humidity + "%");
            wind.text("Wind Speed: " + response.wind.speed + " MPH");
            description.text("Description: " + response.weather[0].description);
        });

    // Get forecast data
    $.ajax({
        url: queryFutureURL,
        method: "GET"
    })
        .then(function (response) {
           
            // For loop for 5 days?

            // Get first forecast date - can streamline
            var future1 = moment().add(1, 'day').format('L');
            day1.text(future1);
            
            // var celTemp = response.main.temp;
            // var Fahrenheit = ((celTemp - 273.15) * 1.80 + 32).toFixed(1);

            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            // temp.text("Temperature: " + Fahrenheit + " °F");
            // humidity.text("Humidity: " + response.main.humidity + "%");
           
        });
});
