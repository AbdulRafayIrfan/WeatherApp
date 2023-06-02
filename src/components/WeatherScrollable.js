/* eslint-disable */
import React, { Component } from 'react';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WeatherContext from '../utils/weatherContext';
import { unixConvertMins } from '../utils/time';

class WeatherScrollable extends Component {
  static contextType = WeatherContext;

  constructor(props, context) {
    super(props, context);

    this.scrollRef = React.createRef();
  }

  scrollUp = () => {
    this.scrollRef.current.scrollTo(0, 0);
  };

  scrollDown = () => {
    this.scrollRef.current.scrollTo(0, 287);
  };

  render() {
    const {
      current: currentC, currentF, forecast: forecastC, forecastF,
    } = this.context.response;
    const { units } = this.context;
    const current = units === 'metric' ? currentC : currentF;
    const forecast = units === 'metric' ? forecastC : forecastF;
    return (
      <div className="weather-scrollable" ref={this.scrollRef}>
        <div className="weather-desc">
          <p>
            Today:
            {current.weather[0].description}
            {' '}
            conditions with a heat index of
            {' ' + Math.round(current.main.feels_like)}
            °.
            The high will be
            {' ' + Math.ceil(current.main.temp_max)}
            ° alongside a low of
            {' ' + Math.floor(current.main.temp_min)}
            °
          </p>
        </div>
        <div className="weather-stats">
          <div>
            <p>Sunrise</p>
            <h3>{unixConvertMins(current.sys.sunrise)}</h3>
          </div>
          <div>
            <p>Sunset</p>
            <h3>{unixConvertMins(current.sys.sunset)}</h3>
          </div>
          <div>
            <p>Chance of rain</p>
            <h3>
              {forecast.list[0].pop * 100}
              %
            </h3>
          </div>
          <div>
            <p>Humidity</p>
            <h3>
              {current.main.humidity}
              %
              {' '}
              <FontAwesomeIcon onClick={this.scrollDown} className="chevrons " pull="right" size="xs" icon={faChevronDown} />
            </h3>
          </div>
          <div>
            <p>Wind</p>
            <h3>{`${current.wind.deg}° ${current.wind.speed}${units === 'metric' ? 'm/s' : ' miles/hr'}`}</h3>
          </div>
          <div>
            <p>Feels like</p>
            <h3>
              {Math.round(current.main.feels_like)}
              °
            </h3>
          </div>
          <div>
            <p>Pressure</p>
            <h3>
              {current.main.pressure}
              {' '}
              hPa
            </h3>
          </div>
          <div>
            <p>Visibility</p>
            <h3>
              {current.visibility / 1000}
              {' '}
              km
            </h3>
          </div>
          <div>
            <p>Cloudiness</p>
            <h3>
              {current.clouds.all}
              %
              {' '}
              <FontAwesomeIcon onClick={this.scrollUp} className="chevrons " size="xs" pull="right" icon={faChevronUp} />
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherScrollable;
