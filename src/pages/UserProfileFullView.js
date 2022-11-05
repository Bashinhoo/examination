import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const UserProfileFullView = ({users}) => {
  const { user } = useParams();
  const [currentProfile, setCurrentProfile] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const result = users.filter(x => x.name.first.toLowerCase() === user.toLowerCase());
    setCurrentProfile(result[0]);
    currentProfile?.gender && setIsLoading(false);
  }, [currentProfile, user, users]);

  return (
    <>
      {!isLoading
        ? <div className='full-view'>
           <img
            src={currentProfile?.picture.medium}
            alt="human"
            width="150px"
            className="user-image"
          />
          <h4>
            Name: {currentProfile?.name.first} {""}
            {currentProfile?.name.last}
          </h4>
          <p>Age: {currentProfile?.dob.age} years</p>
          <p>Gender: {currentProfile?.gender}</p>
          <p>ID: {currentProfile?.id.name}</p>
          <p>Email: {currentProfile?.email}</p>
          <p>Username: {currentProfile?.login.username}</p>
          <p>Location: {`${currentProfile?.location.city}, ${currentProfile?.location.country}`}</p>
          <p>Postcode: {currentProfile?.location.postcode}</p>
        </div>
        : <p>User not found!</p>
      }
    </>
  )
}

export default UserProfileFullView