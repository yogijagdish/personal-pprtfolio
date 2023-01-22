import React from "react";
import my_photo from "../images/my_photo.png";
import background from "../images/background.webp";
import school from "../images/school.jpg";
import college from "../images/college.jpg";
import bachelorcollege from "../images/bachelor-college.jpg";
import gallary from "../Gallary/Gallary.js";

export default function Home() {
  return (
    <>
      <div className="flex" style={{ backgroundImage: `url(${background})` }}>
        <div className="p-36 m-48">
          <h3 className="text-2xl"> 👋 Hi, </h3>
          <p className="text-xl">
            This is Jagdish Yogi,
            <br />
            Student of Electronics, Communication and Information Engineering.
            <br />
            <button className="m-4 border-2 rounded-lg bg-blue-600 border-blue-800 shadow-lg shadow-blue-600/60 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
              <div className="p-2"> Download Resume </div>
            </button>
          </p>
        </div>
        <div className="py-32 m-12">
          <img src={my_photo} alt="my_photo" className="float-left" />
        </div>
      </div>
      <div>
        <div>
          <h1 className="text-2xl font-bold text-center text-orange-600">
            KNOW MORE ABOUT ME
          </h1>
          <h1 className="text-2xl font-bold text-left text-orange-600">
            EDUCATION
          </h1>
          <div className="flex flex-row ">
            <p className="rounded-r-3xl w-3/5 h-40 mt-8 bg-sky-800 p-16">
              Completed SLC from Public Secondary English Boarding School on
              2072
              <br /> Pyuthan Municiplity-2, Pyuthan
            </p>
            <img src={school} alt="" className="w-96 ml-72 rounded-3xl" />
          </div>
          <div className="flex flex-row-reverse">
            <p className="rounded-l-3xl w-3/5 h-40 mt-8 bg-sky-800 p-16">
              Completed +2 from New Summit College on 2074 <br /> Purano
              Baneshwor, Kathmandu
            </p>
            <img src={college} alt="pic of colllege" className="w-96 mr-72 rounded-3xl" />
          </div>
          <div className="flex flex-row">
            <p className="rounded-r-3xl w-3/5 h-40 mt-8 bg-sky-800 p-16">
              Currently Studying Bachelor's in Engineering in Paschimanchal
              Caompus <br /> Lamachaur-16, Pokhara
            </p>
            <img
              src={bachelorcollege}
              alt="pic of paschimanchal campus"
              className="w-96 ml-72 rounded-3xl"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-bold text-left text-orange-600">
            GALLARY
          </h1>
          <div className="grid grid-cols-3 gap-6">
            <div className="w-96 border-2 rounded-lg border-blue-900">
              <img src={gallary.imagedatascience} alt="" />
              Workshop on Data Analysis and Machine learning Introduction on
              Python organized by the department
            </div>
            <div className="w-96 border-2 rounded-lg border-blue-900">
              <img src={gallary.imagejankari} alt="" />
              Workshop on quality testing and assurance organized by ices and
              jankari teck
            </div>
            <div className="w-96 border-2 rounded-lg border-blue-900">
              <img src={gallary.imagebattleforspeed} alt="" />
              Participating in Battle for Speed organized by Robotics Club
            </div>
            <div className="w-96 border-2 rounded-lg border-blue-900">
              <img src={gallary.imageminor} alt="" />
              Minor Project Defence and Prototype of our project
            </div>
            <div className="w-96 border-2 rounded-lg border-blue-900">
              <img src={gallary.imageclass} alt="" />
              BEI-075 class
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
