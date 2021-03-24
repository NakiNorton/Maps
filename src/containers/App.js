import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import { fetchAllLocations, fetchPolygonCoordinates, postPolygonCoordinates } from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = state => {
  return { locations: state.Locations.data, polygonMarkers: state.PolygonMarkers.data };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAllLocations, fetchPolygonCoordinates, postPolygonCoordinates }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
