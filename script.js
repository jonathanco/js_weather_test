// Example: https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/San_Francisco.json

var base_path = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/";
var weatherContainer = document.getElementById("weather");
var cities = [
    "San_Francisco",
    "Miami",
    "New_Orleans",
    "Chicago",
    "New_York_City"
];

// Convert from Meters Per Second to Miles Per Hour
function fromMPStoMPH(mps) {
    return (Math.round(10 * mps * 2.2369362920544) / 10) + " mph";
}

// Convert from Kelvins to Fahrenheit
function convertKtoF(kelvin) {
    return Math.round((kelvin - 273.15) * 1.8) + "&deg;";
}

// Weather icon
function getIconURL(icon) {
    return "http://openweathermap.org/img/w/" + icon + ".png";
}

//
function weather (){
    var elem = $( ".weather-cards" ).clone();
    elem.find('.city-name').text('San Francisco');
    elem.find('.degrees').text('63');
    elem.find('.worm').text('5');
    elem.find('.tenp').text('5');
    $(".weather").append(elem);
}

weather();

//
var pageCounter = 1;

//event lisiner
btn.addEventListener(function() {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', ' https://s3-us-west-2.amazonaws.com/s.cdpn.io/266205/San_Francisco' + pageCounter +'.json');
    ourRequest.onload = function () {
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
    pageCounter++;
    if(pageCounter >3){
        btn.classList.add("hide-me");
    }
});


function renderHTML(data){
    var htmlString = "";

    for (i = 0; i < data.length; i++){
        htmlString +="<p>" + data[i].name + "is a " + data[i].species + "like eat";
        for(ii = 0; ii<data[i].foods.likes.length; ii++){
            htmlString += data[i].foods.likes[ii];
        }

        htmlString +='</p>';
    }

    base_path.insertAdjacentHTML('beforeend', htmlString);
}
