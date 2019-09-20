import { connect } from 'react-redux';
import DeleteButton from '../deleteButton/DeleteButton';
import { deleteAPin } from '../../actions/pinActions';

const mapDispatchToProps = dispatch => ({
  handleDelete(pin) {
    dispatch(deleteAPin(pin));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(DeleteButton);
