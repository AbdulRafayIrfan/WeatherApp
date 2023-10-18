/* eslint-disable */
import React, { Component } from 'react';
import WeatherCarousel from './WeatherCarousel';
import WeatherScrollable from './WeatherScrollable';
import UnitSelector from "./UnitSelector";

class WeatherDraggable extends Component {

  render() {
    return (
      <div className="draggable">
        <WeatherCarousel />
        <WeatherScrollable />
        <UnitSelector />
      </div>
    );
  }
}

export default WeatherDraggable;
