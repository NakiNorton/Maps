import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { postNewLocation } from '../actions/locationActions';

import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ postNewLocation }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
