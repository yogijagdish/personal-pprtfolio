import React from "react";
import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { jd } from "../images/images";
import { motion } from 'framer-motion';
import About from "./About";
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Footer from "./Footer"
import BackToTop from './BackToTop';

const buttonVariant = {
  hidden: {
    scale: 1,
  },
  show: {
    originX: 0,
    scale: 1.2,
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'
  }
};

const imageVariant = {
  hidden: {
    scale: 1,
    filter: "brightness(0.6)",
  },
  show: {
    scale: 1.1,
    filter: "brightness(1)",
    transition: {
      duration: 0.3,
    }
  }
};

export default function Home() {
  return (
    <section className="bg-backgroundColour text-textColour px-5 py-32 md:py-60 scroll-smooth" id="home">
      <div className="container mx-auto grid md:grid-cols-2 md:gap-96 items-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-bodyFont">
            Hi, <br />
            I am <span className="font-extrabold">
              <motion.span
              className="text-orange-400"
                variants={buttonVariant}
                initial="hidden"
                whileHover="show"
              >
                Jagdish Yogi
              </motion.span>
            </span> <br />
            Web Developer
          </h1>
          <motion.div className="pt-8"
            variants={buttonVariant}
            initial="hidden"
            whileHover="show"
          >
            <button className="font-bodyFont font-bold text-xl h-10 w-52 bg-navColour rounded-lg hover:text-black">
              <a href="../images/Resume/jagdishcv.pdf" download="jadishcv.pdf">Download Resume</a>
            </button>
          </motion.div>
          <div className="flex py-8">
            <motion.div
              variants={buttonVariant}
              initial="hidden"
              whileHover="show"
            >
              <a href="https://github.com/yogijagdish" className="pr-4 inline-block hover:text-black">
                <AiFillGithub size={36} />
              </a>
            </motion.div>
            <motion.div
              variants={buttonVariant}
              initial="hidden"
              whileHover="show"
            >
              <a href="https://twitter.com/JagdishYogi14" className="pr-4 inline-block hover:text-black">
                <AiOutlineTwitter size={36} />
              </a>
            </motion.div>
            <motion.div
              variants={buttonVariant}
              initial="hidden"
              whileHover="show"
            >
              <a href="https://www.linkedin.com/in/jagdishyogi/" className="pr-4 inline-block hover:text-black">
                <AiFillLinkedin size={36} />
              </a>
            </motion.div>
          </div>
        </div>
        <div>
          <motion.img src={jd} alt="gif images"
            variants={imageVariant}
            initial="hidden"
            animate="show"
          />
        </div>
      </div>
    </section>
  )
}
