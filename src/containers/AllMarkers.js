/*eslint-disable no-unused-vars*/
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AllMarkers from '../components/AllMarkers';

const mapStateToProps = (state) => {
  return { locations: state.Locations.data }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(AllMarkers);
