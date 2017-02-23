var OWM_api_key = '4a0c15896857b7863427caabef6ec7e0';
var lokoOutput = document.getElementById("loko");
var varmecoOutput = document.getElementById("varmeco");


// Detekti ĉu trovi la tutmondlokon eblas
if (!navigator.geolocation) {
    lokoOutput.innerHTML = "<p>Tutmondalokigo ne eblas en via retumilo</p>";
}


// Provi trovi la tutmondlokon, kaj se jes akiri la veteron
lokoOutput.innerHTML = "<p>Serĉanta la tutmondlokon...</p>";
navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    lokoOutput.innerHTML = '<p>Latitudo: ' + latitude + '° <br>Longitudo: ' + longitude + '°</p>';
    akiriVeteron(latitude, longitude);
}


function error() {
    lokoOutput.innerHTML = "Ne eblis trovi vian tutmondlokon";
}


// Akiri la veteron, uzante OpenWeatherMap kaj ĝian malŝlosilon
function akiriVeteron(latitude, longitude){
    $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + latitude + "&lon=" + longitude + "&appid=" + OWM_api_key, function(result){
        afiŝiVeteron(result);
    });
}


// Afiŝi en HTML la diversajn datumojn pri vetero
function afiŝiVeteron(result){
    console.log(result);

    // Afiŝi la urbon
    lokoOutput.innerHTML += '<p>Urbo: ' + result.name + '</p>';

    // Afiŝi la varmecon
    varmecoOutput.innerHTML = '<p>Varmeco: ' + result.main.temp + '</p>';

    // Elekti kaj afiŝi la bildon laŭ la vento
    if (result.clouds.all < 50){
        $("#ĉielo").addClass("fa-sun-o");
    } else {
        $("#ĉielo").addClass("fa-cloud");
    }
}