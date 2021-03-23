import React, { Component } from 'react';
import LeafletMap from '../containers/LeafletMap';
import FormContainer from '../containers/FormContainer';

class App extends Component {
  componentDidMount() {
    this.getLocations();
  }
  getLocations() {
    this.props.fetchAllLocations();
    this.props.fetchPolygonCoordinates();
  }
  render() {
    return (
      <div className="App">
        <FormContainer />
        <LeafletMap locations={this.props.locations} polygonMarkers={this.props.polygonMarkers} />
      </div>
    );
  }
}

export default App;
