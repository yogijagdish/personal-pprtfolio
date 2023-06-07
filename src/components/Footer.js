import React from "react";
import { Link } from "react-router-dom";
import { facebook,instagram,linkedin,twitter,github } from "../images/images.js";
export default function Footer() {
  return (
    <div className="bg-slate-400 p-8">
      <div className="pt-8 text-center text-3xl">
        {" "}
        <Link to="/">Home</Link> | <Link to="/skills">Skills</Link> |{" "}
        <Link to="/"> About </Link> | <Link to="/contact">Contact Me</Link>{" "}
      </div>
      <p className="mt-8 text-2xl text-center"> Can Connect With Me in: </p>
      <div className="flex flex-row justify-center">
        <img
          src={facebook}
          alt="logo of facebook"
          className="h-16 m-2"
        />
        <img
          src={instagram}
          alt="logo of instagram"
          className="h-16 m-2"
        />
        <img
          src={linkedin}
          alt="logo of linkedin"
          className="h-16 m-2"
        />
        <img
          src={twitter}
          alt="logo of twitter"
          className="h-16 m-2"
        />
        <img 
          src={github} 
          alt="logo of github" 
          className="h-16 m-2" 
        />
      </div>
      <div>
        <h2 className="text-3xl text-center m-4"> Can Mail me at: yogijagdish007@gmail.com</h2>
      </div>
    </div>
  );
}