import React from 'react'

const WeatherDispaly = ({ weather }) => {
   
    return (
        <div>
            {weather.map((element, index) => (
                <div key={index}>
                    <p style={{ color: element.temperature > 20 ? "rgb(255, 0, 0)" : "rgb(0, 128, 0)" }}>
                        Temperature: {element.temperature}
                    </p>
                    <span style={{ color: "yellow" }}>
                        Conditions: {element.conditions}
                    </span>
                </div>
            ))}
        </div>
    );
}

export default WeatherDispaly
