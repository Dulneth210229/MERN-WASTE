import React from "react";
import UserHomeHeader from "./UserHomeHeader";
import ImageCarousel from "./ImgTransform/ImgTransform";
function UserHome() {
  return (
    <div className="">
      <UserHomeHeader />
      <div>
        <ImageCarousel />
      </div>
    </div>
  );
}

export default UserHome;
