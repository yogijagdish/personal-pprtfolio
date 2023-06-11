import React from "react";

export default function Footer() {
  return(
    <section className="bg-gray-700 text-white">
      <div className="flex flex-col "> 
        <div className="text-center p-16 font-bodyFont text-xl italic">
          Sometimes Journey is more pleasant than the destination
        </div>
        <div className="font-bodyFont text-xl text-center p-8">
          <a href="/#home" className="mr-4">Home</a> | <a href="/#education" className="ml-4 mr-4">Education </a> | <a href="/#projects" className="ml-4 mr-4"> Projects </a> | <a href="/#skills" className="ml-4 mr-4">Skills</a> | <a href="/#contact" className="ml-4"> Contact </a>
        </div>
      </div>
    </section>
  )
}