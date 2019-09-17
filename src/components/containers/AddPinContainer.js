import { connect } from 'react-redux';
import AddPin from '../form/AddPin';
import { createPin } from '../../actions/pinActions';

const mapDispatchToProps = dispatch => ({
  handleSubmit(where, address, startTime, endTime, message) {
    console.log(where);
    event.preventDefault();
    dispatch(createPin(where, address, startTime, endTime, message));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(AddPin);
