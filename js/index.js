$("#navbar-container").load("navbar.html");
$.getJSON("city.json", function(data) {
  var city = {};
  $.each(data, function(key, val) { city[key] = val; });
  $documentTitle = $(document).prop('title');
  $(document).prop('title', $documentTitle.replace("[City Name]", city["name"]));
  $(".data-city-name").each(function() { $(this).text(city["name"]); });
  $(".data-mission-statement").each(function() { $(this).text(city["mission"]); });
});