import React from "react";
import my_photo from "../images/my_photo.png";
import background from "../images/background.webp";

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
            <button class="bg-sky-500 hover:bg-sky-800 text-white mt-4 py-2 px-4 rounded inline-flex items-center">
              <svg
                class="fill-current w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download Resume</span>
            </button>
          </p>
        </div>
        <div className="py-32 m-12">
          <img src={my_photo} alt="my_photo" className="float-left" />
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-center text-orange-600"> KNOW MORE ABOUT ME </h1>
        <h1 className="text-2xl font-bold text-left text-orange-600"> EDUCATION </h1>
        <div className="w-3/5 h-40 m-8 bg-sky-800">
        <p> Completed SLC from Public Secondary English Boarding School on 2072 <br /> Pyuthan Municiplity-2, Pyuthan</p>
        </div>
        <div className="w-3/5 h-40 m-8 bg-sky-800">
        <p> Completed +2 from New Summit College on 2074 <br /> Purano Baneshwor, Kathmandu</p>
        </div>
        <div className="w-3/5 h-40 m-8 bg-sky-800">
        <p> Currently Studying Bachelor's in Engineering in Paschimanchal Caompus <br /> Lamachaur-16, Pokhara</p>
        </div>
      </div>
    </>
  );
}
