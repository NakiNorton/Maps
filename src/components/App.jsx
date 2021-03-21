import React, { Component } from 'react';
import LeafletMap from '../containers/LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
    this.props.fetchAllLocations();
  }
  render() {
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap locations={this.props.locations} />
      </div>
    );
  }
}

export default App;
