import React from "react";
import j_image from "../images/j_image.webp"
import { AiFillHome } from "react-icons/ai";
import {GiSkills} from "react-icons/gi";
import {FcAbout,FcContacts} from "react-icons/fc"


export default function Navbar() {
  return (
    <nav className="flex p-4">

      {/* flex 1  */}
      <div className="basis-2/4 ml-48 px-32"> <a href="/">  <img src={j_image} alt="pic of a alphabet" className="h-5 float-left mr-2"/> Jagdish Yogi</a> </div>

      {/* flex 2  */}
      <ul className="flex basis-2/4 justify-center space-x-28">
        <li> <a href="/"> <AiFillHome className="float-left mr-2" size={26}/> Home </a> </li>
        <li> <a href="/"> <GiSkills className="float-left mr-2" size={26}/>Skills </a></li>
        <li> <a href="/"> <FcAbout className="float-left mr-2" size={26}/> About </a> </li>
        <li> <a href="/"> <FcContacts className="float-left mr-2" size={26}/> Contact Me </a></li>
      </ul>
    </nav>
  );
}
