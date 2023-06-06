import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { myPhoto } from "../images/images";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      {/* Front page initally viewed when the portfolio is opened */}
      <div className="flex bg-gray-800">
        <div className="p-36 m-48">
          <h3 className="text-4xl font-bodyFont font-extrabold"> 👋 Hi, </h3>
          <p className="text-3xl font-titleFont font-bold">
            This is Jagdish Yogi,
            <br />
            Student of Electronics, Communication and Information Engineering.
            <br />
            <button className="m-4 border-2 rounded-lg bg-blue-600 border-blue-800 shadow-lg shadow-blue-600/60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
              <div className="p-2"> Download Resume </div>
            </button>
          </p>
        </div>
        <div className="mt-52 pr-64">
          <img src={myPhoto} alt="my_photo" className="float-left h-" />
        </div>
      </div>
    </>
  );
}
