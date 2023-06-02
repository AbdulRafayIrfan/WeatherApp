import axios from "axios";

function getForecast(coords, units) {
    return axios.get(`https://weather-app-ios.herokuapp.com/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=${units}`);
}

function getCurrent(coords, units) {
    return axios.get(`https://weather-app-ios.herokuapp.com/current?lat=${coords.latitude}&lon=${coords.longitude}&units=${units}`);
}

function getPartOfDayStyle(current) {
    let sunrise, sunset, now;
    sunrise = current.sys.sunrise;
    sunset = current.sys.sunset;
    now = (Date.now() / 1000).toFixed(0);
    // Check if sunrise / sunset
    if (now < sunrise || now > sunset) {
        return "linear-gradient(49deg, rgba(62,54,69,1) 0%, rgba(18,0,25,1) 100%)";
    } else {
        return "linear-gradient(58deg, rgba(201,161,231,1) 0%, rgba(0,212,255,1) 100%)";
    }
}

export {getCurrent, getForecast, getPartOfDayStyle};