import React from 'react';

const WeatherContext = React.createContext("Abdul");

const WeatherProvider = WeatherContext.Provider;
const WeatherConsumer = WeatherContext.Consumer;

export { WeatherProvider, WeatherConsumer }
export default WeatherContext;