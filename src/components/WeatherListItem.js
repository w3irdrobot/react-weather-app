import React, { Component } from 'react';

const onClick = (index, callback) => () => callback(index);

const WeatherListItem = ({ day, index, onDayClicked }) => {
  const date = new Date(day.dt * 1000);

  return (
    <div className="weather-list-item" onClick={onClick(index, onDayClicked)}>
      <h1>{date.getMonth() + 1} / {date.getDate()}</h1>
      <h2>{day.temp.min.toFixed(1)}&deg;F &#124; {day.temp.max.toFixed(1)}&deg;F</h2>
    </div>
  );
};

export default WeatherListItem;
