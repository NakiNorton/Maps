require('isomorphic-fetch');

const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

const saveLocation = (location) => {
  return {
    type: 'SAVE_LOCATION',
    data: location
  }
}

const storePolygonCoordinates = (polygonMarkers) => {
  return {
    type: 'STORE_POLYGON_COORDINATES',
    data: polygonMarkers.polygonMarkers,
  };
};


// api calls
export const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};

export const fetchPolygonCoordinates = () => {
  return (dispatch) => {
    return fetch('/polygon-coordinates', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(response => response.json())
      .then(json => dispatch(storePolygonCoordinates(json)));
  };
};

export const postNewLocation = (newLocation) => {
  return async (dispatch) => {
    const response = await fetch(`/locations`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLocation)
    })
    if (!response.ok) {
      const errorResponse = await response.json();
      throw new Error(errorResponse.error);
    } else {
      const data = await response.json()
      dispatch(saveLocation(data))
    }
  }
}

export const postPolygonCoordinates = (coordinates) => {
  return (dispatch) => {
    return fetch('/polygon-coordinates', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(coordinates)
    })
      .then(handleErrors)
      .then(response => response.json())
      .then(json => dispatch(storePolygonCoordinates(json)))
      .catch(error => alert(error));
  };
};

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
