import React, { Component } from 'react';
import { get } from 'axios';
import ZipForm from './ZipForm';
import WeatherList from './WeatherList';
import CurrentDay from './CurrentDay';

const API_ENDPOINT = 'http://localhost:3000/weather';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: '',
      city: {},
      dates: [],
      selectedDate: null
    };

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onDayClicked = this.onDayClicked.bind(this);
  }

  onFormSubmit(zipcode) {
    get(`${API_ENDPOINT}/${zipcode}`)
    .then(({ data }) => {
      const { city, list: dates } = data;

      this.setState({ zipcode, city, dates, selectedDate: null });
    });
  }

  onDayClicked(dayIndex) {
    this.setState({ selectedDate: dayIndex });
  }

  render() {
    const { dates, selectedDate, city } = this.state;

    return (
      <div className="app">
        <ZipForm onSubmit={this.onFormSubmit} />
        <WeatherList days={dates} onDayClicked={this.onDayClicked} />
        {selectedDate !== null && <CurrentDay day={dates[selectedDate]} city={city} />}
      </div>
    );
  }
}

export default App;
