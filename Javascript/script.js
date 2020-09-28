// http://api.openweathermap.org/data/2.5/forecast?q=atlanta&appid=0b58d2e4fda20e7f139806a12aba40d1


$("button").on("click", function() {
    var city = $(this).attr("data-city");
    var queryURL = "api.openweathermap.org/data/2.5/forecast?q=" +
      city + "&appid=0b58d2e4fda20e7f139806a12aba40d1";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;


      });
  });
