import React from "react";
import UserHomeHeader from "./UserHomeHeader";
import ImageCarousel from "./ImgTransform/ImgTransform";
function UserHome() {
  return (
    <div>
      <UserHomeHeader />
      <div className="">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default UserHome;
