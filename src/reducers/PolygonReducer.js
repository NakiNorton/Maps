const initialState = {
  data: []
}

const PolygonMarkers = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_POLYGON_COORDINATES':
      const coordinates = {...state, data: action.data}
      return coordinates
    default:
      return state;
  }
};

export default PolygonMarkers