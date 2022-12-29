import React from "react";
import background from "../images/background.jpeg";
import my_photo from "../images/my_photo.jpg";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <div
        className="flex flex-row bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${background})` }}
      >
        <div className="p-12 m-12">
          Hi <br />
          It's Jagdish Yogi.
          <br />
          Student of Electronics, Communication and Engineering.
          <br />
          This is Frontend developer, Backend developer and blockchain Engineer.
        </div>
        <div className="flex-initial w-64 p-12 m-12">
          <img src={my_photo} alt="myimage" className="float-right" />
        </div>
        <Skills/>
      </div>
    </>
  );
}
