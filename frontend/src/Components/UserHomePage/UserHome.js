import React from "react";
import UserHomeHeader from "./UserHomeHeader";
import homeimg01 from "./ImgTransform/img/home01.svg";
import homeimg02 from "./ImgTransform/img/home02.svg";
import Footer from "./UserFooter.js";

// import ImageCarousel from "./ImgTransform/ImgTransform";
function UserHome() {
  return (
    <div className="">
      <UserHomeHeader />
      {/* imge carousel */}
      {/* <div><ImageCarousel /></div> */}
      <div className="mt-16 ">
        <div className="flex flex-row ">
          <div className="w-1/2">
            <img src={homeimg01} alt="homeimg01" className="" />
          </div>
          <div className="w-1/2 b mt-44">
            <h2 className="text-center font-bold font-serif text-slate-600 text-6xl">
              Waste is a resource in the wrong place
            </h2>
            <p className="text-justify p-5 font-medium text-slate-600 italic">
              "Waste, if managed correctly, can become a valuable resource
              rather than just discarded material. Recycling, composting, and
              repurposing waste can turn what is considered trash into something
              useful, such as renewable energy or new products. This approach
              reduces landfill usage and conserves natural resources.
              Encouraging users to think of waste as a misplaced resource helps
              promote sustainable practices. By sorting and disposing of waste
              properly, individuals can contribute to transforming waste into
              new opportunities"
            </p>
          </div>
        </div>
      </div>
      <div className=" ">
        <div className="flex flex-row ">
          <div className="w-1/2 b mt-44">
            <h2 className="text-center font-bold font-serif text-slate-600 text-6xl">
              A clean city starts with you
            </h2>
            <p className="text-justify p-5 font-medium text-slate-600 italic">
              "Every citizen has a role to play in keeping their city clean and
              green. Proper waste disposal, recycling, and taking small daily
              actions can collectively make a significant difference. This
              phrase empowers individuals to take responsibility for their
              environment, fostering a sense of ownership. When residents
              actively participate in keeping their surroundings tidy, it leads
              to a healthier and more beautiful community. It also reduces
              pollution, prevents diseases, and enhances overall quality of
              life. Your actions today can inspire others and create a ripple
              effect towards a cleaner city"
            </p>
          </div>
          <div className="w-1/2">
            <img src={homeimg02} alt="homeimg01" className="" />
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default UserHome;
