import React from "react";
import img1 from "../public/img1.jpg";
import img2 from "../public/img2.jpg";
import img3 from "../public/img3.jpg";
import img4 from "../public/img4.jpg";
import img5 from "../public/img5.jpg";
import img6 from "../public/img6.jpg";
import img7 from "../public/img7.jpg";
import img8 from "../public/img8.jpg";
import InstagramImg from "./InstagramImg";

export const Instagram = () => {
  return (
    <div>
      <p>Follow me on Instagram</p>
      <p>@ShutterVerse</p>
      <div>
        <InstagramImg socialImg={img1} />
      </div>
    </div>
  );
};
