const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_LOCATIONS':
      return Object.assign({}, state, {
        data: state.data.concat(action.data),
      });
    case 'SAVE_LOCATION':
      const updatedLocations = { ...state, data: state.data.concat(action.data) }
      return updatedLocations
    default:
      return state;
  }
};

export default Locations;
