import { connect } from 'react-redux';
import MessageInput from './MessageInput';
import { addMessage } from '../../Store/actionCreators';

const mapStateToProps = (state) => ({
  author: state.author,
});
const mapDispatchToProps = dispatch => ({
  onSubmit: (message) => {
    dispatch(addMessage(message));
  }
});

export const MessageInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageInput)
