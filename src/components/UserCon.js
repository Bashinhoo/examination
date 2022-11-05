import React from 'react';

const UserCon = ({ user, onClick }) => {
  return (
    <div className="user" onClick={onClick}>
      <img
        src={user.picture.medium}
        alt="human"
        width="150px"
        className="user-image"
      />
      <h4>
        Name: {user.name.first} {""}
        {user.name.last}
      </h4>
      <p>Age: {user.dob.age} years</p>
      <p>Phone: {user.phone}</p>
    </div>
  )
}

export default UserCon;