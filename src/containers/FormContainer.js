import { connect } from 'react-redux'
import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: (location) => {
      dispatch({
        type: 'SAVE_LOCATION',
        data: location,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
