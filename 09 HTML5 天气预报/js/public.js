/**
 * 
 * @authors ufree (you@example.org)
 * @date    2016-02-18 10:04:00
 * @version $Id$
 */

var baseYahooURL = "https://query.yahooapis.com/v1/public/yql?q="
var selectedCity = "北京";
var placeholder = "";
var unit = "c";
$(function(){
  init();
})
  
function init() {
    getWoeid(selectedCity);

    $('#city').keypress(function() {
        if (event.which == 13) {
            selectedCity = $('#city').val();
            getWoeid(selectedCity);
            $('#city').blur();
        }
    });

    $('#btn').click(function() {
        if ($('#btn').html() == "F") {
            unit = "c";
        } else unit = "f";
        $('#btn').html(unit.toUpperCase());
        getWoeid(selectedCity);
    })

    $('#city').focus(function(event) {
        placeholder = $("#city").val();
        $("#city").val("");
        $('#city').css("border-bottom", "1px solid #F5F8FC");
    });

    $('#city').blur(function(event) {
        if ($("#city").val() == "") {
            $("#city").val(placeholder);
        }
    });
}

function getWoeid(city) {
    var woeidYQL = 'select woeid from geo.placefinder where text="' + city + '"&format=json';
    var jsonURL = baseYahooURL + woeidYQL;
    $.getJSON(jsonURL, woeidDownloaded);
}

function woeidDownloaded(data) {
    var woeid = null;
    if (data.query.count <= 0) {
        $('#city').val("No city found");
        $('#deg').html("");
        setImage(999, $("#big")[0]);
        for (var i = 0; i <= 4; i++) {
            $('#forecast' + i).html("");
            setImage(999, $("#forecastimg" + i)[0]);
            $('#forecastdeg' + i).html("");
        }
        return;
    } else if (data.query.count == 1) {
        woeid = data.query.results.Result.woeid;
    } else {
        woeid = data.query.results.Result[0].woeid;
    }
    getWeatherInfo(woeid);
}

function getWeatherInfo(woeid) {
    var weatherYQL = 'select * from weather.forecast where woeid=' + woeid + ' and u = "' + unit + '" &format=json';
    var jsonURL = baseYahooURL + weatherYQL
    $.getJSON(jsonURL, weaterInfoDownloaded);
}

function weaterInfoDownloaded(data) {
    $('#city').val(selectedCity);
    //$('#city').val(data.query.results.channel.location.city);   // api数据库返回的是英文
    $('#deg').html(data.query.results.channel.item.condition.temp + " °" + unit.toUpperCase());
    setImage(data.query.results.channel.item.condition.code, $('#big')[0]);
    for (var i = 0; i <= 4; i++) {
        var fc = data.query.results.channel.item.forecast[i];
        $('#forecast' + i).html(fc.day);
        setImage(fc.code, $("#forecastimg" + i)[0]);
        $('#forecastdeg' + i).html((parseInt(fc.low) + parseInt(fc.high)) / 2 + " °" + unit.toUpperCase());
    }
}

function setImage(code, image) {
    image.src = "http://box.hubwiz.com/course/55a60445a164dd0d75929fbd/";
    switch (parseInt(code)) {
        case 0:
            image.src += "images/icons/Tornado.svg"
            break;
        case 1:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 2:
            image.src += "images/icons/Wind.svg"
            break;
        case 3:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 4:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 5:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 6:
            image.src += "images/icons/Cloud-Rain-Alt.svg"
            break;
        case 7:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 8:
            image.src += "images/icons/Cloud-Drizzle-Alt.svg"
            break;
        case 9:
            image.src += "images/icons/Cloud-Drizzle-Alt.svg"
            break;
        case 10:
            image.src += "images/icons/Cloud-Drizzle-Alt.svg"
            break;
        case 11:
            image.src += "images/icons/Cloud-Drizzle-Alt.svg"
            break;
        case 12:
            image.src += "images/icons/Cloud-Drizzle-Alt.svg"
            break;
        case 13:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 14:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 15:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 16:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 17:
            image.src += "images/icons/Cloud-Hail-Alt.svg"
            break;
        case 18:
            image.src += "images/icons/Cloud-Hail-Alt.svg"
            break;
        case 19:
            image.src += "images/icons/Cloud-Hail-Alt.svg"
            break;
        case 20:
            image.src += "images/icons/Cloud-Fog.svg"
            break;
        case 21:
            image.src += "images/icons/Cloud-Fog.svg"
            break;
        case 22:
            image.src += "images/icons/Cloud-Fog.svg"
            break;
        case 23:
            image.src += "images/icons/Cloud-Fog.svg"
            break;
        case 24:
            image.src += "images/icons/Wind.svg"
            break;
        case 25:
            image.src += "images/icons/Thermometer-Zero"
            break;
        case 26:
            image.src += "images/icons/Cloud.svg"
            break;
        case 27:
            image.src += "images/icons/Cloud-Moon.svg"
            break;
        case 28:
            image.src += "images/icons/Cloud.svg"
            break;
        case 29:
            image.src += "images/icons/Cloud-Moon.svg"
            break;
        case 30:
            image.src += "images/icons/Cloud-Sun.svg"
            break;
        case 31:
            image.src += "images/icons/Moon.svg"
            break;
        case 32:
            image.src += "images/icons/Sun.svg"
            break;
        case 33:
            image.src += "images/icons/Moon.svg"
            break;
        case 34:
            image.src += "images/icons/Sun.svg"
            break;
        case 35:
            image.src += "images/icons/Cloud-Hail-Alt.svg"
            break;
        case 36:
            image.src += "images/icons/Sun.svg"
            break;
        case 37:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 38:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 39:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 40:
            image.src += "images/icons/Cloud-Rain.svg"
            break;
        case 41:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 42:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 43:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 44:
            image.src += "images/icons/Cloud.svg"
            break;
        case 45:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 46:
            image.src += "images/icons/Cloud-Snow-Alt.svg"
            break;
        case 47:
            image.src += "images/icons/Cloud-Lightning.svg"
            break;
        case 3200:
            image.src += "images/icons/Moon-New.svg"
            break;
        case 999:
            image.src += "images/icons/Compass.svg"
            break;
        default:
            image.src += "images/icons/Moon-New.svg"
            break;
    }
}


