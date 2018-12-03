import React from 'react';
import UserItem from './UserItem';
import PropTypes from 'prop-types';

const Users = ({ users, author }) => {
  return (
    <div className="usersListContainer">
      {users.map((user, idx) => {
        const isAuthor = user.id === author.id;
        const name = isAuthor ? `${user.name} (you)` : user.name;
        return ( <UserItem key={user.id} active={true} name={name} />)
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
