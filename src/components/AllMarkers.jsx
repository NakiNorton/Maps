import React, { PureComponent } from 'react';
import MapMarker from './Marker';

class AllMarkers extends PureComponent {
  handleClick = (coordinates) => {
    const { updatePolygon } = this.props;
    updatePolygon(coordinates)
  }
 
  render() {
    const { locations } = this.props;
    const markerArray = locations.map((marker, i) => {
      return (
        <MapMarker
          key={i}
          location={[+marker.lat, +marker.lng]}
          name={marker.name}
          handleClick={this.handleClick}
        />
      );
    });

    return <div className="paths-container">{markerArray}</div>;
  }
}

export default AllMarkers;
