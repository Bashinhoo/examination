import React from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";

function UserProfile({open, onClose, currentProfile}) {

  return (
    <Modal open={open} onClose={onClose}>
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
      <Link to={`/profile/${currentProfile?.name.first}`}> view full page </Link>
    </Modal>
  );
}

export default UserProfile;
