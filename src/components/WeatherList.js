import React, { Component } from 'react';
import WeatherListItem from './WeatherListItem';

const WeatherList = ({ days, onDayClicked }) =>
  <div className="weather-list flex-parent">
    {days.map((day, index) =>
      <WeatherListItem
        key={day.dt}
        day={day}
        index={index}
        onDayClicked={onDayClicked}
      />
    )}
  </div>

export default WeatherList;
