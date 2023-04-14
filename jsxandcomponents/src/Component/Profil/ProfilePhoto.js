import React from "react";
import img from "./Photo.jpg";
const ProfilePhoto = () => {
  return (
    <div>
      <img style={{ borderRadius: "50%" }} src={img} alt="ProfilePhoto" />
    </div>
  );
};

export default ProfilePhoto;
