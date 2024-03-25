import './App.css'
import axios from "axios";
import {useState} from "react";
import CitySearch from "./Components/CitySearch.tsx";
import WeatherDisplay from "./Components/WeatherDisplay.tsx";

function App() {
  const[selectedCity, setSelectedCity] = useState('');
  const[weatherData,setWeatherData] = useState(null);

  const fetchWeatherData = async () => {
    const WEATHER_API_KEY = "3ab75d2ba79abeb364cd86c48ec2800c"
    const baseUrl = `http://api.openweathermap.org`
    const path = `/data/2.5/weather`
    const query = `units=metric&lang=ru&appid=${WEATHER_API_KEY}`



    try{
      const weatherResponse = await axios.get(`${baseUrl}${path}?q=${selectedCity}&${query}`);
      setWeatherData(weatherResponse.data);

    }catch (e) {
      console.error('Error fetching data:', e);
    }
  }

  return (
    <div>
      <h1>Weather App</h1>
      <CitySearch setSelectedCity={setSelectedCity} fetchWeatherData={fetchWeatherData}/>
      {weatherData && <WeatherDisplay weatherData={weatherData}/>}
    </div>
  )
}

export default App
