import { connect } from 'react-redux';
import Messages from './Messages';

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export const MessagesContainer = connect(
  mapStateToProps,
)(Messages)
