import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => ({
  users: [...state.users.values()],
  author: state.author,
});

export const UsersContainer = connect(
  mapStateToProps,
)(Users);
