import React from "react";
import { Link } from "react-router-dom";

function MyProfile() {
  return (
    <div className="profile-container">
      <h1 className="profile-title">Твой персональный чипер</h1>
      <button>
        <Link to="/chiper" className="profile-button">
          Перейти к чиперу
        </Link>
      </button>
    </div>
  );
}

export default MyProfile;
