import React from "react";

import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai";

import {pp} from "../images/images"

export default function Home() {
  return (

    /*
     section allows to wrap all the element in a tag.
     py-36 allows the height of the section
     */
    <section className="bg-gray-900 text-white px-5 py-36">
      {/* we have two div here. One is for holding all the text and links and another for image
      grid -> displays all div in grid. These grids will be displayed in different lines which is idle for mobile
      md:grid-cols-2 -> this makes grid to have two columns so that both the div can be displayed side to side
      item-center -> vertically or horizontally center the grid item within the container
      jusity-between -> allows the equal spacing between the content of the grid  */}
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        {/* first div */}
        {/* pb-5 is required as we need some padding between the two div
            pb-0 -> since in md the screen are side to side so no need of padding
         */}
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-bodyFont">
            Hi, <br/>
            I am <span className="font-titleFont"> J</span>agdish Yogi <br/>
            Web Developer
          </h1>
          <div className="flex py-8">

            <div> <a href="https://github.com/yogijagdish" className="pr-4 inline-block hover:text-black">
            <AiFillGithub size={36}/>
            </a>
            </div>

            <div>
              <a href="https://twitter.com/JagdishYogi14" className="pr-4 inline-block hover:text-black">
            <AiOutlineTwitter size={36}/>
            </a> 
            </div>
            <div>
              <a href="https://www.linkedin.com/in/jagdishyogi/" className="pr-4 inline-block hover:text-black">
            <AiFillLinkedin size={36}/>
              </a>
            </div>

          </div>
        </div>
        {/* second grid */}
        <div>
          <img src={pp} alt="gif images" />
        </div>
      </div>
    </section>
  )
}