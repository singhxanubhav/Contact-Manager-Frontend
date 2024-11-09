import React, { useState } from "react";

const Weather = () => {
  const [city, setCity] = useState();

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
        const response = await axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`)
    } catch (error) {
        
    }
  }

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter City Name"
        value={city}
        onChange={handleCityChange}
      />
      <button>Get Weather</button>
    </div>
  );
};

export default Weather;
