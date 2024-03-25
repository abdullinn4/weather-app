import React from "react";
import './citySearch.css'

interface WeatherDisplayProps{
    weatherData: any;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({weatherData}) => {

    const {name, main, weather} = weatherData;

    return(
        <div>
            <h3>Погода в {name}</h3>
            <p>{Math.round(main.temp)} °C</p>
            <p>{weather[0].description}</p>
        </div>
    )
}
export default WeatherDisplay;