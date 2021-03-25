import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMsg: false
    }
  }

  setErrorMsg(val) {
    this.setState({ errorMsg: val})
  }

  verifyNewLocation = (newLocation) => {
    this.props.postNewLocation(newLocation)
      .catch(() => this.setErrorMsg(true))
  }

  submitForm(e, data) {
    e.preventDefault();
    this.setErrorMsg(false)
    this.verifyNewLocation(data)
  }

  render() {
    return (
        <form className="form">
          <label>
            Name
            <input
              ref={(input) => { this.name = input }}
              type="text"
            />
          </label>
          <label>
            Lat
            <input
              ref={(input) => { this.lat = input }}
              type="text"
            />
          </label>
          <label>
            Lon
            <input
              ref={(input) => { this.lng = input }}
              type="text"/>
          </label>
          <button
            type="submit"
            onClick={(e) => this.submitForm(e, {
              name: this.name.value,
              lat: this.lat.value,
              lng: this.lng.value
            })}
          >
            Save
          </button>
          {this.state.errorMsg &&
            <section className="error-container">
              <p className="error-heading">Sorry! This marker couldn't be saved.
              </p>
              <p>Please make sure that the name and coordinates meet the requirements below:
              </p>
              <ul>
                <li><b>Name</b> must have at least one character.</li>
                <li><b>Latitude</b> must be a number between -90 & 90 (inclusive), no special characters, symbols or letters.</li>
                <li><b>Longitude</b> must be a number between -180 & 180 degrees (inclusive), no special characters, symbols or letters.</li>
              </ul>
            </section>
          }
        </form>
    );
  }
}


export default Form;
