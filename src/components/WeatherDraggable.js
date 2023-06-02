/* eslint-disable */
import React, { Component } from 'react';
import WeatherCarousel from './WeatherCarousel';
import WeatherScrollable from './WeatherScrollable';
import WeatherContext from '../utils/weatherContext';

class WeatherDraggable extends Component {
  static contextType = WeatherContext;

  toFahrenheit = () => { this.context.toggleUnits('imperial'); };

  toCelsius = () => { this.context.toggleUnits('metric'); };

  render() {
    const { units } = this.context;
    return (
      <div className="draggable">
        <WeatherCarousel />
        <WeatherScrollable />
        <p onClick={this.toCelsius} className={`weather-unit ${units === 'metric' && 'active'}`}>C°</p>
        <p style={{ display: 'inline-block' }}>|</p>
        <p onClick={this.toFahrenheit} className={`weather-unit ${units === 'imperial' && 'active'}`}>F°</p>
      </div>
    );
  }
}

export default WeatherDraggable;
