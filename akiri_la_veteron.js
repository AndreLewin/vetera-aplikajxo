// Trovi la pozicion per la retumilo
var output = document.getElementById("loko");

if (!navigator.geolocation) {
    output.innerHTML = "<p>Geolocation is not supported by your browser</p>";
}

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    output.innerHTML = '<p>Latitude is ' + latitude + '° <br>Longitude is ' + longitude + '°</p>';
}

function error() {
    output.innerHTML = "Unable to retrieve your location";
}

output.innerHTML = "<p>Locating…</p>";

navigator.geolocation.getCurrentPosition(success, error);



/*
// Peti la veteron al OpenWeatherMap
var api_key = '4a0c15896857b7863427caabef6ec7e0';
var vetero = loadjson('http://api.openweathermap.org/data/2.5/weather?q=Paris&appid=' + api_key);
//  $(".varmeco").html(vetero);
*/