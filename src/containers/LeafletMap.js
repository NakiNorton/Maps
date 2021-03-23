import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from './AllMarkers'

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultCenter: [39.750809, -104.996810],
      polygon: []

    };
  }

  updatePolygon = (coordinates) => {
    const { postPolygonCoordinates} = this.props
    if (!this.state.polygon.includes(coordinates)) {
      this.setState({
        polygon: [...this.state.polygon, coordinates]
      }, () => postPolygonCoordinates(this.state.polygon))
    } else {
      let filteredList =  this.state.polygon.filter(marker => marker !== coordinates)
      this.setState({ polygon: filteredList }, () => postPolygonCoordinates(filteredList))
    }
  }
 
  getMapCenter() {
    const { locations } = this.props
    // assuming that we're always starting off with 3 locations
    if (locations.length > 3) {
      const newLocation = locations.slice(-1)[0]
      return [newLocation.lat, newLocation.lng]
    } else {
      return this.state.defaultCenter
    }
  }


  render() {
    return (
      <div className="map-container">
        <Map
          className="map"
          zoomControl={false}
          center={this.getMapCenter()}
          zoom={4}
          maxBounds={[[85, 100], [-85, -280]]}
        >
          <TileLayer
            url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
            attribution='Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
            maxZoom={10}
            minZoom={2}
          />
          <ZoomControl
            position="bottomright"
          />
          <AllMarkers updatePolygon={this.updatePolygon}/>
          <Polygon positions={this.props.polygonMarkers} />
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
