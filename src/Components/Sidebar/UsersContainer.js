import { connect } from 'react-redux';
import Users from './Users';

const mapStateToProps = (state) => ({
  users: [...state.users.values()],
});

export const UsersContainer = connect(
  mapStateToProps,
)(Users);
