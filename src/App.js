/* eslint-disable */
import React, { Component } from 'react';
import Error from './components/Error';
import { getCurrent, getForecast, getPartOfDayStyle } from './api/Weather';
import { WeatherProvider } from './utils/weatherContext';
import WeatherMain from './components/WeatherMain';
import BouncingDotsLoader from './components/BouncingDotsLoader';
import WeatherDraggable from './components/WeatherDraggable';
import { isApple } from './utils/SystemUtils';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      locationAccess: true,
      permission: false,
      units: 'metric',
      bgColor: '',
      response: {
        forecast: '',
        current: '',
        forecastF: '',
        currentF: '',
      },
    });
  }

  // Navigator success function
  success = (pos) => {
    // Change permission state to true,
    // Only then do the get requests
    this.setState({
      ...this.state,
      permission: true,
    }, () => {
      const { coords } = pos;
      const resp = {
        forecast: '',
        current: '',
        forecastF: '',
        currentF: '',
      };
      let bgStyle = '';
      getCurrent(coords, 'metric')
        .then((res) => {
          // Set to response variable
          resp.current = res.data;
          // Get the part of day style to appropriately set background of App
          bgStyle = getPartOfDayStyle(res.data);
          // Call getForecast which returns another promise
          return getForecast(coords, 'metric');
        })
        .then((res) => {
          resp.forecast = res.data;
          // Get current weather with imperial units
          return getCurrent(coords, 'imperial');
        })
        .then((res) => {
          resp.currentF = res.data;
          // Get forecast with imperial units
          return getForecast(coords, 'imperial');
        })
        .then((res) => {
          resp.forecastF = res.data;
          // After all weather data has been collected
          // Do state changes with the background color
          // And the response state variable
          this.setState({
            ...this.state,
            bgColor: bgStyle,
            response: resp,
          });
        });
    });
  };

  // Navigator error function
  errors = (err) => {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  };

  // Once component mounts
  componentDidMount() {
    // Check if geolocation supported
    if ('geolocation' in navigator) {
      // Permissions query only done on non-Apple devices
      if (isApple) {
        navigator.geolocation.getCurrentPosition(this.success, this.errors);
      } else {
        // Perform location permissions query
        navigator.permissions.query({ name: 'geolocation' })
          .then((result) => {
            switch (result.state) {
              case 'granted':
                navigator.geolocation.getCurrentPosition(this.success);
                break;
              case 'prompt':
                navigator.geolocation.getCurrentPosition(this.success, this.errors);
                break;
              case 'denied':
                console.warn('Location access denied');
                break;
              default:
            }
          });
      }
    } else {
      this.setState({
        ...this.state,
        locationAccess: false,
      });
    }
  }

  // Class property function to toggle the units, sent via context to other components
  toggleUnits = (units) => {
    this.setState({
      ...this.state,
      units,
    });
  };

  render() {
    const {
      response, locationAccess, permission, units, bgColor
    } = this.state;

    // Change background color of body
    document.body.style.background = this.state.bgColor;

    if (!locationAccess) {
      return (
        <div className="flexbox-container">
          <Error
            errMsg="This application is not compatible with your device"
          />
        </div>
      );
    } if (!permission) {
      return (
        <div className="flexbox-container">
          <Error
            errMsg="Please allow location access to use the application"
          />
        </div>
      );
    } if (locationAccess && permission) {
      if (response.forecast === '') {
        // Show loader here
        return <BouncingDotsLoader />;
      }
      return (
        <div className="flexbox-container">
          <div className="container">
            <WeatherProvider value={{ response, units, toggleUnits: this.toggleUnits }}>
              <WeatherMain />
              <WeatherDraggable />
            </WeatherProvider>
          </div>
        </div>
      );
    }
  }
}

export default App;
