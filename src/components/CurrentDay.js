import React, { Component } from 'react';

const CurrentDay = ({
  city,
  day: { temp, weather, pressure, humidity, speed, deg }
}) => {
  const w = weather[0];

  return (
    <div className="current-day">
      <h1 className="day-header">{city.name}</h1>
      <div className="weather">
          <p>
            <img src={`http://openweathermap.org/img/w/${w.icon}.png`} alt={w.description}/>
            {w.description}
          </p>
        </div>
      <div className="details flex-parent">
        <div className="temperature-breakdown">
          <p>Morning Temperature: {temp.morn}&deg;F</p>
          <p>Day Temperature: {temp.day}&deg;F</p>
          <p>Evening Temperature: {temp.eve}&deg;F</p>
          <p>Night Temperature: {temp.night}&deg;F</p>
        </div>
        <div className="misc-details">
          <p>Atmospheric Pressure: {pressure} hPa</p>
          <p>Humidity: {humidity}%</p>
          <p>Wind Speed: {speed} mph</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentDay;
