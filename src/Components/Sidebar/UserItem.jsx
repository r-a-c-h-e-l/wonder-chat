import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ active, name}) => {
  const activeClass = active ? 'active' : 'disabled';
  return (
    <div className="userItemContainer">
      <div className={`userIndicator ${activeClass}`}/>
      <div className="userName">{name}</div>
    </div>
  )
}

UserItem.proptypes = {
  active: PropTypes.bool,
  name: PropTypes.string,
}

export default UserItem;
