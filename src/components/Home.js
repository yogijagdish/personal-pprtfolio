import React from "react";

import {AiFillGithub,AiOutlineTwitter,AiFillLinkedin} from "react-icons/ai";

import {pp} from "../images/images"

export default function Home() {
  return (
    <section className="bg-gray-900 text-white px-5 py-36">
      <div className="container mx-auto grid md:grid-cols-2 items-center md:justify-between">
        <div className="hero-info pb-5 md:pb-0">
          <h1 className="text-4xl lg:text-6xl font-bodyFont">
            Hi, <br/>
            I am <span className="font-titleFont"> J</span>agdish <br/>
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
        <div>
          <img src={pp} alt="gif images" />
        </div>
      </div>
    </section>
  )
}