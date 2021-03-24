import { combineReducers } from 'redux';
import PolygonMarkers from './PolygonReducer'
import Locations from './LocationsReducer';

const RootReducer = combineReducers({
  Locations,
  PolygonMarkers
});

export default RootReducer;
