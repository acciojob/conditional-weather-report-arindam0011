import React, { useState, useEffect } from 'react';
import WeatherDispaly from './WeatherDispaly';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 0, conditions: '' });

  useEffect(() => {
    // Update weather data with the provided input
    setWeather({ temperature: 25, conditions: "Sunny" });
  }, []);

  return (
    <div>
      <WeatherDispaly weather={weather} />
    </div>
  );
};

export default App;
