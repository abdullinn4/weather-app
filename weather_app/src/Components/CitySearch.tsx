import React from "react";

interface CitySearchProps{
    setSelectedCity: Function;
    fetchWeatherData: Function;
}

const CitySearch: React.FC<CitySearchProps> = ({setSelectedCity,fetchWeatherData}) => {
    const handleSearch = () => {
        fetchWeatherData();
    }

    return(
        <div className={"searchInfo"}>
            <input type="text" className="searchInput" placeholder="Введите город" onChange={(e) => setSelectedCity(e.target.value)}/>
            <button onClick={handleSearch}>Поиск</button>
        </div>
    )
}
export default CitySearch;