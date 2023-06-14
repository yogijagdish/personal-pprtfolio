import "../customCSS/desktopNavbar.css";
import React from "react";
import { logo } from "../images/images";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { motion } from "framer-motion";

const buttonVariant = {
  hidden: {
    scale: 1,
    boxShadow: "none",
  },
  show: {
    scale: 1.1,
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
    transition: {
      duration: 0.3,
    },
  },
};

const imageVariant = {
  initial: {
    scale: 1,
    y: 0,
    boxShadow: "none",
  },
  animate: {
    y: [-10, 0],
    scale: [1.1, 1],
    boxShadow: [
      "0 2px 4px rgba(0, 0, 0, 0.3)",
      "none",
    ],
    transition: {
      duration: 0.6,
      repeat: Infinity,
      repeatType: "mirror",
    },
  },
};

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
    console.log(toggle);
  };

  return (
    <header className="flex justify-between px-5 py-4 bg-gradient-to-r from-teal-500 to-teal-700 text-navTextColour fixed w-full z-10">
      <a href="/" className="logo text-2xl font-bodyFont font-bold">
        <motion.img
          src={logo}
          alt="logo of j"
          className="float-left h-8 ml-2"
          variants={imageVariant}
          initial="initial"
          animate="animate"
        />
        agdish
      </a>

      {/* desktop navbar */}
      <nav className="hidden md:block">
        <ul className="flex font-titleFont font-extrabold">
          <motion.li
            className="nav-link"
            variants={buttonVariant}
            whileHover="show"
          >
            <a href="/#home">Home</a>
          </motion.li>
          <motion.li
            className="nav-link"
            variants={buttonVariant}
            whileHover="show"
          >
            <a href="/#education">Education</a>
          </motion.li>
          <motion.li
            className="nav-link"
            variants={buttonVariant}
            whileHover="show"
          >
            <a href="/#projects">Projects</a>
          </motion.li>
          <motion.li
            className="nav-link"
            variants={buttonVariant}
            whileHover="show"
          >
            <a href="/#skills">Skills</a>
          </motion.li>
          <motion.li
            className="nav-link"
            variants={buttonVariant}
            whileHover="show"
          >
            <a href="/#contact">Contact</a>
          </motion.li>
        </ul>
      </nav>

      {/* mobile navbar */}
      <nav className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}>
        <ul className="flex flex-col">
          <li>
            <a href="/#home">Home</a>
          </li>
          <li>
            <a href="/#education">Education</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/#skills">Skills</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
        </ul>
      </nav>

      {/* toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <BsThreeDots size={30} /> : <BsThreeDotsVertical size={30} />}
      </button>
    </header>
  );
}
