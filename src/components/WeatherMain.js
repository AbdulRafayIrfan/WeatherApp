import React, {Component} from 'react';
import WeatherContext from "../utils/weatherContext";
import { motion } from "framer-motion";

class WeatherMain extends Component {

    static contextType = WeatherContext;

    render() {
        const { current: currentC, currentF } = this.context.response;
        const { units } = this.context;
        const current = units === "metric" ? currentC : currentF;
        return (
            <motion.section className="current-weather" initial={{opacity: 0, y: -250}} animate={{opacity: 1, y: 0}} transition={{ delay: 0.75, type: 'spring' ,stiffness: 120 }}>
                <h2>{current.name}</h2>
                <p>{current.weather[0].main}</p>
                <h1>{Math.round(current.main.temp) + "°"}</h1>
                <p className="min-max">{"H:" + Math.round(current.main.temp_max) + "°"}</p>
                <p className="min-max">{"L:" + Math.floor(current.main.temp_min) + "°"}</p>
            </motion.section>
        );
    }
}

export default WeatherMain;