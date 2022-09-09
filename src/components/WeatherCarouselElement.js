import React, {Component} from 'react';
import {timeConvert} from "../utils/time";
import {motion} from "framer-motion";

class WeatherCarouselElement extends Component {
    render() {
        const { time, icon, temp } = this.props;
        return (
            <motion.div className="carousel-element">
                <p>{time === "Now" ? <b>Now</b> : timeConvert(time)}</p>
                <img src={`https://openweathermap.org/img/w/${icon}.png`} alt="weather-icon"/>
                <p>{time === "Now" ? <b>{Math.round(temp) + "°"}</b> : Math.round(temp) + "°"}</p>
            </motion.div>
        );
    }
}

export default WeatherCarouselElement;