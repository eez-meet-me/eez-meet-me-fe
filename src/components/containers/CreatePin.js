import { connect } from 'react-redux';
import PinForm from '../form/PinForm';
import { createPin } from '../../actions/pinActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(where, address, message, startTime, endTime) {
    dispatch(createPin(where, address, message, startTime, endTime));
  }
});

export default connect(
  null, 
  mapDispatchToProps
)(PinForm);
