// TO DO
// 1. Set default data
// 2. One city search at a time - don't add
// 3. Get icons
// 4. Streamline so that forecast data is looped
// 5. Link city searches
// 6. Add Fahrenheit function

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

    // Get and display city search  - CLEAR PREVIOUS RESULTS?
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
            icon.text(response.weather.icon);  // FIGURE OUT
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

            // For loop for 5 days? - can streamline
            // Get first forecast date

            // Day 1
            var future1 = moment().add(1, 'day').format('L');
            day1.text(future1);

            var celTemp = response.list[0].main.temp;
            var Fahrenheit = ((celTemp - 273.15) * 1.80 + 32).toFixed(1);
            // $("future-icon-1").text(response.list[0].weather.icon);;  // FIGURE OUT
            $("#future-temp-1").text("Temperature: " + Fahrenheit + " °F");
            $("#future-hum-1").text("Humidity: " + response.list[0].main.humidity + "%");

            // Day 2
            var future2 = moment().add(2, 'day').format('L');
            day2.text(future2);

            var celTemp = response.list[8].main.temp;
            var Fahrenheit = ((celTemp - 273.15) * 1.80 + 32).toFixed(1);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-2").text("Temperature: " + Fahrenheit + " °F");
            $("#future-hum-2").text("Humidity: " + response.list[8].main.humidity + "%");

            // Day 3
            var future3 = moment().add(3, 'day').format('L');
            day3.text(future3);

            var celTemp = response.list[16].main.temp;
            var Fahrenheit = ((celTemp - 273.15) * 1.80 + 32).toFixed(1);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-3").text("Temperature: " + Fahrenheit + " °F");
            $("#future-hum-3").text("Humidity: " + response.list[16].main.humidity + "%");

            var future4 = moment().add(4, 'day').format('L');
            day4.text(future4);

            var celTemp = response.list[24].main.temp;
            var Fahrenheit = ((celTemp - 273.15) * 1.80 + 32).toFixed(1);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-4").text("Temperature: " + Fahrenheit + " °F");
            $("#future-hum-4").text("Humidity: " + response.list[24].main.humidity + "%");

            var future5 = moment().add(5, 'day').format('L');
            day5.text(future5);

            var celTemp = response.list[32].main.temp;
            var Fahrenheit = ((celTemp - 273.15) * 1.80 + 32).toFixed(1);
            // icon.text(response.weather[0].icon);;  // FIGURE OUT
            $("#future-temp-5").text("Temperature: " + Fahrenheit + " °F");
            $("#future-hum-5").text("Humidity: " + response.list[32].main.humidity + "%");

        });
});
