import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props)
    this.state = {
      errorMsg: false
    }
  }

  setErrorMsg() {
    this.setState({ errorMsg: !!this.setErrorMsg})
  }

  verifyLocationInputs(data) {
    // check if user inputs are valid entries
    // if yes return true, otherwise set error message
    const isNameValid = /^[a-zA-Z'.\s-]{1,25}$/g.test(data.name)
    const isLatValid = (data.lat !== '') && isFinite(data.lat) && Math.abs(data.lat) <= 90
    const isLngValid = (data.lng !== '') && isFinite(data.lng) && Math.abs(data.lng) <= 180;
  
    if (isNameValid && isLatValid && isLngValid) {
      return true
    } else {
      this.setErrorMsg()
    }
  }

  submitForm(e, data) {
    e.preventDefault();
    // reset error message
    this.setErrorMsg()
    if (this.verifyLocationInputs(data)) {
        // verify that coordinates are valid
        // if true, save location
      this.props.saveLocation(data);
    }
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
          <section style={{ textAlign: 'left' }}> 
            <p style={{ padding: '.25rem 1rem' }}>
              <span style={{ color: 'red' }}>Sorry! Something went wrong.</span><br/><br/>Please make sure the name and coordinates are valid:
            </p>
            <ul>
              <li>
                <b>Name</b> needs to be between 1-25 characters, and only include letters, apostrophees, periods & hyphens.
              </li>
              <li>
                <b>Latitude</b> must be a number between -90 & 90 (inclusive).
              </li>
              <li>
                <b>Longitude</b> must be a number between -180 & 180 degrees (inclusive).
              </li>
            </ul>
          </section>
          }
        </form>
    );
  }
}


export default Form;
