import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-card">
      <div className="avatar">ZU</div>

      <div className="info">
        <h4>Omkar Gavade</h4>
        <p>User ID: ZU1234</p>
      </div>

      <button className="edit-btn">Edit</button>
    </div>
  );
};

export default Profile;