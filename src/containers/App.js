import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../style/App.css';
import { fetchAllLocations, fetchPolygonCoordinates } from '../actions/locationActions';
import App from '../components/App';

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchAllLocations, fetchPolygonCoordinates }, dispatch);
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
