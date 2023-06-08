import React from "react";
import {logo} from "../images/images"

import {BsThreeDots,BsThreeDotsVertical} from "react-icons/bs"

import "../customCSS/desktopNavbar.css"

import { useState } from "react";




export default function Navbar() {

  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <header className="flex justify-between px-5 py-2 bg-gray-900 text-white fixed w-full z-10">
      <a href="/" className="logo text-2xl font-titleFont font-bold text-accent"> <img src={logo} alt="logo of j" className="float-left h-8 mr-2 ml-2"/> Jagdish </a>

      {/* desktop navbar */}

      <nav className="hidden md:block">
        <ul className="flex">
          <li> <a href="/"> Home </a></li>
          <li> <a href="/#education"> Education </a> </li>
          <li> <a href="/#skills"> Skills </a> </li>
          <li> <a href="/#projects"> Projects </a> </li>
          <li> <a href="/#contact"> Contact</a> </li>
        </ul>
      </nav>

      {/* mobile navbar */}

      <nav className={ !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>

        <ul className="flex flex-col">
          <li> <a href="/#home"> Home </a> </li>
          <li> <a href="/#education"> Education </a> </li>
          <li> <a href="/#skills"> Skills </a> </li>
          <li> <a href="/#projects"> Projects </a> </li>
          <li> <a href="/#contact"> Contact </a> </li>
        </ul>
      </nav>

      {/* toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <BsThreeDots size={30} />: <BsThreeDotsVertical size={30}/>}
      </button>

    </header>
  )
}