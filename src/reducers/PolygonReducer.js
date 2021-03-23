const initialState = {
  data: []
}


const PolygonMarkers = (state = initialState, action) => {
  switch (action.type) {
    case 'STORE_POLYGON_COORDINATES':
      console.log(action.data)
      const coordinates = {...state, data: state.data.concat(action.data)}
      return coordinates
    default:
      return state;
  }
};

export default PolygonMarkers