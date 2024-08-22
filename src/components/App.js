import React, { useState, useEffect } from 'react';
import WeatherDispaly from './WeatherDispaly';

const App = () => {
  const [weather, setWeather] = useState([]);

  useEffect(() => {
    // Update weather data with the provided input
    let weatherarr=[
        {temperature: 25, conditions: "Sunny"},
        {temperature: 15, conditions: "Comfortable"},
    ];
    setWeather(weatherarr);
  }, []);

  return (
    <div>
      <WeatherDispaly weather={weather} />
    </div>
  );
};

export default App;
