import React, { Component } from 'react';
import { Map, TileLayer, ZoomControl, Polygon } from 'react-leaflet';
import AllMarkers from './AllMarkers'

class LeafletMap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      defaultCenter: [39.750809, -104.996810],
      polygonMarkers: [
        [39.750809, -104.996810],
        [45.750809, -114.996810],
        [47.750809, -124.996810]
      ]
    };
  }
 
  getMapCenter() {
    const { locations } = this.props
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
          <AllMarkers />
          <Polygon positions={this.state.polygonMarkers}/>
        </Map>
      </div>
    );
  }
}

export default LeafletMap;
