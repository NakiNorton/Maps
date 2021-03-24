import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { postPolygonCoordinates } from '../actions/locationActions';
import LeafletMap from '../components/LeafletMap';

const mapStateToProps = state => {
  return { locations: state.Locations.data, polygonMarkers: state.PolygonMarkers.data };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ postPolygonCoordinates }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(LeafletMap);
