// CSS Style for replacing more css
import "../customCSS/desktopNavbar.css"

import React from "react";
import {logo} from "../images/images"

// import from react icons for making icons
import {BsThreeDots,BsThreeDotsVertical} from "react-icons/bs"

import { useState } from "react";

export default function Navbar() {

  // toggle for mobile to display navbar or not
  const [toggle, setToggle] = useState(false);

  // handles when toggle is clicked
  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  }

  return (

    /*  headers is the top of website 
        flex -> displays the content in flex and maintain their flexibility behaviour
        justify-between -> maintains the equal spacing between the content of the flex
        fixed -> makes the header fix and doesnot move durinf scrolling
        w-full -> has the full width of the screen
    */
    <header className="flex justify-between px-5 py-2 bg-gray-900 text-white fixed w-full z-10">

      <a href="/" className="logo text-2xl font-titleFont font-bold"> <img src={logo} alt="logo of j" className="float-left h-8 mr-2 ml-2"/> Jagdish </a>

      {/* desktop navbar */}

      {/* hidden -> hides the navbar for all the screen that has resolution lower than md
          md:block -> displays all the content in the block */}

      <nav className="hidden md:block">
        <ul className="flex">
          <li> <a href="/#home"> Home </a></li>
          <li> <a href="/#education"> Education </a> </li>
          <li> <a href="/#projects"> Projects </a> </li>
          <li> <a href="/#skills"> Skills </a> </li>
          <li> <a href="/#contact"> Contact</a> </li>
        </ul>
      </nav>

      {/* mobile navbar */}

      {/* mobile-nav is css class made seprately in another imported folder
          left-[-100%] -> pushes the screen to -100% i.e. it is out of the screen
          left-0 -> displays the content from the extreme left */}
      <nav className={ !toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>

        <ul className="flex flex-col">
          <li> <a href="/#home"> Home </a> </li>
          <li> <a href="/#education"> Education </a> </li>
          <li> <a href="/#projects"> Projects </a> </li>
          <li> <a href="/#skills"> Skills </a> </li>
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