import React from "react";
import my_photo from "../images/my_photo.png";
import background from "../images/background.webp"

export default function Home() {
  return (
    <>
      <div className="flex" style={{backgroundImage: `url(${background})`}}>
        <div className="p-36 m-48">
          <h3 className="text-2xl"> 👋 Hi, </h3>
          <p className="text-xl">
            This is Jagdish Yogi,
             <br /> 
             Student of Electronics, Communication
            and Information Engineering. 
          </p>
        </div>
        <div className="py-32 m-12">
          <img src={my_photo} alt="my_photo" className="float-left" />
        </div>
      </div>
    </>
  );
}
