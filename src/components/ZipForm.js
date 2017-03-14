import React, { Component } from 'react';

class ZipForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      zipcode: ''
    };

    this.inputUpdated = this.inputUpdated.bind(this);
    this.submitZipCode = this.submitZipCode.bind(this);
  }

  inputUpdated(e) {
    const { value } = e.target;

    this.setState({ zipcode: value });
  }

  submitZipCode(e) {
    e.preventDefault();

    const { zipcode } = this.state;
    const { onSubmit } = this.props;

    onSubmit(zipcode);

    this.setState({ zipcode: '' });
  }

  render() {
    const { zipcode } = this.state;

    return (
      <div className="zip-form">
        <form onSubmit={this.submitZipCode}>
          <label htmlFor="zipcode">Zip Code</label>
          <input
            className="form-control"
            type="input"
            name="zipcode"
            value={zipcode}
            onInput={this.inputUpdated}/>
          <button type="submit" className='btn btn-success'>Get the forecast!!</button>
        </form>
      </div>
    );
  }
}

export default ZipForm;
