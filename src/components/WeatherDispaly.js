import React from 'react'

const WeatherDispaly = ({weather}) => {
    const { temperature, conditions } = weather;
    const color = temperature > 20 ? 'red' : 'blue';
  
    return (
      <div>
        <p style={{ color: color }}>Temperature: {temperature}</p>
        <span style={{ color: "green" }}>Conditions: {conditions}</span>
      </div>
    );
}

export default WeatherDispaly
