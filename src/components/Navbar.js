import React from "react";
import {Link} from "react-router-dom"
import {logo} from "../images/images"
import { AiFillHome } from "react-icons/ai";
import {GiSkills} from "react-icons/gi";
import {FcAbout,FcContacts} from "react-icons/fc"


export default function Navbar() {
  return (
    <nav className="flex p-8 bg-gray-600">

      {/* flex 1  */}
      <div className="basis-2/4 ml-48 px-32 font-bodyFont font-extrabold text-2xl"> <a href="/">  <img src={logo} alt="pic of a alphabet" className="h-8 float-left mr-2"/> Jagdish Yogi</a> </div>

      {/* flex 2  */}
      <ul className="flex basis-2/4 justify-center space-x-28 font-bodyFont text-xl font-bold bg-grey-700">
        <li> <Link to="/"> <AiFillHome className="float-left mr-2" size={26}/> Home </Link></li>
        <li> <Link to="/skills"> <GiSkills className="float-left mr-2" size={26}/>Skills </Link></li>
        <li> <Link to="/"> <FcAbout className="float-left mr-2" size={26}/> About </Link></li>
        <li> <Link to="/contact"> <FcContacts className="float-left mr-2" size={26}/> Contact Me </Link></li>
      </ul>
    </nav>
  );
}
