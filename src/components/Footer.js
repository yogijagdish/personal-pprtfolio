import React from "react";

import {MdLocationPin} from "react-icons/md"


export default function Footer() {
  return(
    <section className="bg-backgroundColour text-textColour">
      <div className="flex flex-col "> 
        <div className="text-center p-8 font-bodyFont text-xl italic">
          Sometimes Journey is more pleasant than the destination
        </div>
        <div className="font-bodyFont text-xl text-center p-8">
          <a href="/personal-pprtfolio/#home" className="mr-4">Home</a>
           | 
          <a href="/personal-pprtfolio/#education" className="ml-4 mr-4"> About </a>
           | 
          <a href="/personal-pprtfolio/#projects" className="ml-4 mr-4"> Projects </a>
           | 
          <a href="/personal-pprtfolio/#skills" className="ml-4 mr-4">Skills</a>
           | 
          <a href="/personal-pprtfolio/#contact" className="ml-4"> Contact </a>
        </div>
        <div className="flex flex-row place-content-center font-bodyFont pb-4 italic">
        <MdLocationPin size={20}/>
        <p> Location: Hattiban, Lalitpur</p>
        </div>
      </div>
    </section>
  )
}