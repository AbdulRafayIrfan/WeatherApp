import axios from 'axios';

function getForecast(coords, units) {
  return axios.get(`https://ios-weather-app.onrender.com/forecast?lat=${coords.latitude}&lon=${coords.longitude}&units=${units}`);
}

function getCurrent(coords, units) {
  return axios.get(`https://ios-weather-app.onrender.com/current?lat=${coords.latitude}&lon=${coords.longitude}&units=${units}`);
}

function getPartOfDayStyle(current) {
  const { sunrise } = current.sys;
  const { sunset } = current.sys;
  const now = (Date.now() / 1000).toFixed(0);
  // Check if sunrise / sunset
  if (now < sunrise || now > sunset) {
    return '#2d2134';
    // return 'linear-gradient(49deg, rgba(62,54,69,1) 0%, rgba(18,0,25,1) 100%)';
  }
  // return 'linear-gradient(58deg, rgba(201,161,231,1) 0%, rgba(0,212,255,1) 100%)';
  return '#73b6f1';
}

export { getCurrent, getForecast, getPartOfDayStyle };
