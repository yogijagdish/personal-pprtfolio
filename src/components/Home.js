import React from "react";

import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai";

import { jd } from "../images/images";



import {motion} from 'framer-motion';


const buttonVariant = {
  hidden: {
    scale: 1,
  },
  show: {
    originX:0,
    scale: 1.2
    
  }
}

export default function Home() {
  return (

    /*
     section allows to wrap all the element in a tag.
     py-36 allows the height of the section
     */
    <section className="bg-backgroundColour text-textColour px-5 py-32 md:py-60 scroll-smooth" id="home">
      {/* we have two div here. One is for holding all the text and links and another for image
      grid -> displays all div in grid. These grids will be displayed in different lines which is idle for mobile
      md:grid-cols-2 -> this makes grid to have two columns so that both the div can be displayed side to side
      item-center -> vertically or horizontally center the grid item within the container
      jusity-between -> allows the equal spacing between the content of the grid  */}
      <div className="container mx-auto grid md:grid-cols-2 md:gap-96 items-center md:justify-between">
        {/* first div */}
        {/* pb-5 is required as we need some padding between the two div
            pb-0 -> since in md the screen are side to side so no need of padding
         */}
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-bodyFont">
            Hi, <br/>
            I am <span className="font-extrabold text-orange-400" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>Jagdish Yogi </span> <br/>
            Web Developer
          </h1>
          <motion.div className="pt-8"
          variants={buttonVariant}
          initial="hidden"
          whileHover="show">
            <button className="font-bodyFont font-bold text-xl h-10 w-52 bg-navColour rounded-lg hover:text-black"> <a href="../images/Resume/jagdishcv.pdf" download="jadishcv.pdf"> Download Resume </a> </button>
            </motion.div>
            
          <div className="flex py-8">

            <motion.div 
            variants={buttonVariant}
            initial="hidden"
            whileHover="show"> <a href="https://github.com/yogijagdish" className="pr-4 inline-block hover:text-black">
            <AiFillGithub size={36}/>
            </a>
            </motion.div>

            <motion.div variants={buttonVariant}
          initial="hidden"
          whileHover="show">
              <a href="https://twitter.com/JagdishYogi14" className="pr-4 inline-block hover:text-black">
            <AiOutlineTwitter size={36}/>
            </a> 
            </motion.div>
            <motion.div variants={buttonVariant}
          initial="hidden"
          whileHover="show">
              <a href="https://www.linkedin.com/in/jagdishyogi/" className="pr-4 inline-block hover:text-black">
            <AiFillLinkedin size={36}/>
              </a>
            </motion.div>
          </div>       
          
        </div>
        {/* second grid */}
        <div>
          <img src={jd} alt="gif images"/>
        </div>
      </div>
    </section>
  )
}