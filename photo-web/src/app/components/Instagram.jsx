import React from "react";
import img1 from '../public/images/img1.jpg';
import img2 from "../public/images/img2.jpg";
import img3 from "../public/images/img3.jpg";
import img4 from "../public/images/img4.jpg";
import img5 from "../public/images/img5.jpg";
import img6 from "../public/images/img6.jpg";
import img7 from "../public/images/img7.jpg";
import img8 from "../public/images/img8.jpg";
import InstagramImg from "./InstagramImg";

export const Instagram = () => {
  return (
    <div className="max-w-[1240] mx-auto text-center py-24">
      <p className="text-2xl font-bold">Follow me on Instagram</p>
      <p className="pb-4">@ShutterVerse</p>
      <div className="grid grid-cols-2 gap-2 p-4 md:grid-col-3 lg:grid-col-6">
        <InstagramImg socialImg={img1} />
        <InstagramImg socialImg={img2} />
        <InstagramImg socialImg={img3} />
        <InstagramImg socialImg={img4} />
        <InstagramImg socialImg={img5} />
        <InstagramImg socialImg={img6} />
        <InstagramImg socialImg={img7} />
        <InstagramImg socialImg={img8} />
      </div>
    </div>
  );
};
