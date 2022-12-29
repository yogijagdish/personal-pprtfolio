import React from "react";
import j_image from "../images/j_image.webp"

export default function Navbar() {
  return (
    <nav className="flex p-4">

      {/* flex 1  */}
      <div className="basis-2/4"> <a href="/">  <img src={j_image} alt="pic of a alphabet" className="h-5"/>Jagdish Yogi </a> </div>

      {/* flex 2  */}
      <ul className="flex basis-2/4 justify-center space-x-28">
        <li> <a href="/"> Home </a> </li>
        <li> <a href="/"> Skills </a></li>
        <li> <a href="/"> About </a> </li>
        <li> <a href="/"> Contact Me </a></li>
      </ul>
    </nav>
  );
}
