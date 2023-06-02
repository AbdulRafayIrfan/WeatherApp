const PORT = process.env.PORT || 8000;
const express = require('express');
const cors = require('cors');

const axios = require('axios');
// Create new axios instance
const instance = axios.create({
  baseURL: 'https://api.openweathermap.org/data/2.5/',
});

require('dotenv').config();

const app = express();

app.use(cors());

app.get('/', (req, res) => {
  res.json('hi');
});

app.get('/current', (req, res) => {
  const { lat, lon, units } = req.query;

  // axios request - OpenWeather API
  instance.get(`/weather?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=${units}`)
    .then((response) => res.json(response.data))
    .catch((err) => console.error(err));
});

app.get('/forecast', (req, res) => {
  const { lat, lon, units } = req.query;

  // axios request - OpenWeather API
  instance.get(`/forecast?lat=${lat}&lon=${lon}&appid=${process.env.API_KEY}&units=${units}`)
    .then((response) => res.json(response.data))
    .catch((err) => console.error(err));
});

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
