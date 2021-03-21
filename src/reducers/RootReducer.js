import { combineReducers } from 'redux';
import Locations from './LocationsReducer';

const RootReducer = combineReducers({
  Locations,
});

export default RootReducer;
