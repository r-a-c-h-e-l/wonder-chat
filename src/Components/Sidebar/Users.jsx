import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const Users = ({ users }) => {
  return (
    <div className="usersListContainer">
    {console.log({ users })}
      {users.map((user, idx) => {
        console.log({ user });
        return ( <UserItem key={user.id} active={true} name={user.name} />)
      })}
    </div>
  )
}

Users.proptypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      name: PropTypes.string,
    })
  )
}
export default Users;
