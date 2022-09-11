import React, {Component} from 'react';
import {motion} from "framer-motion";
import WeatherContext from "../utils/weatherContext";
import WeatherCarouselElement from "./WeatherCarouselElement";


class WeatherCarousel extends Component {
    static contextType = WeatherContext;

    fullDayForecast = this.context.response.forecast.list.slice(0, 9);
    fullDayForecastF = this.context.response.forecastF.list.slice(0, 9);

    render() {
        const { current: currentC, currentF } = this.context.response;
        const { units } = this.context;
        const current = units === "metric" ? currentC : currentF;
        return (
            <motion.div className="carousel" whileTap={{ cursor: "grabbing" }}>
                <motion.div drag="x" dragConstraints={{ right: 0, left: -208 }} className="inner-carousel">
                    {/* First Element is 'Now' */}
                    <WeatherCarouselElement time="Now" temp={current.main.temp} icon={current.weather[0].icon}/>
                    {/* Mapping the full day forecast */}
                    {
                        units === "metric" ?
                            this.fullDayForecast.map((value, index) => {
                                return <WeatherCarouselElement key={index} time={value.dt_txt} temp={value.main.temp} icon={value.weather[0].icon}/>
                            })
                        :
                            this.fullDayForecastF.map((value, index) => {
                                return <WeatherCarouselElement key={index} time={value.dt_txt} temp={value.main.temp} icon={value.weather[0].icon}/>
                            })
                    }
                </motion.div>
            </motion.div>
        );
    }
}

export default WeatherCarousel;