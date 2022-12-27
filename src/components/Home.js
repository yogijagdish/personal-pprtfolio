import React from "react";
import background from "../images/background.jpg";
import image from "../images/images.jpeg";

export default function Home(props) {
  return (
    <>
      <div
        className="flex flex-row bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div>
          Hi <br />
          It's Jagdish Yogi.
          <br />
          Student of Electronics, Communication and Engineering.
          <br />
          This is Frontend developer, Backend developer and blockchain Engineer.
        </div>
        <div className="flex-initial w-64">
          <img src={background} alt="myimage" className="float-right" />
        </div>
      </div>
    </>
  );
}
