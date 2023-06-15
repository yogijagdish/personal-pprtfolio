import React, {useEffect} from "react";

import { images } from "../images/images";

import {BsCircle} from 'react-icons/bs';

import {BiDotsVerticalRounded} from 'react-icons/bi'

import AOS from "aos";

import "aos/dist/aos.css";

export default function About() {

    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    },[]);

    return (
        // starting of the about section
        <section className="bg-backgroundColour text-textColour p-8 md:p-32 scroll-smooth" id="about">
            {/* this is flex between about me and the rest */}
            <div className="flex flex-col font-titleFont font-extrabold text-2xl md:text-6xl">
                 <h1 className="mx-auto border-b-[5px] border-orange-400 mb-16">About Me </h1>
            </div>

            {/* this  the flex between image and rest of the content */}

            <div className="flex flex-col md:flex-row gap-8">
                {/* this is only in desktop view */}
                <div className="hidden md:block">
                    <div className="mx-auto p-8">
                        <img src={images} alt="my_image" style={{height:'800px',width:"1600px"}} className="rounded-2xl" />
                    </div>
                </div>
                <div className="block md:hidden">
                    <div className="mx-auto p-8">
                        <img src={images} alt="my_image" style={{height:'400px'}} className="rounded-2xl" />
                    </div>
                </div>

{/* this is flex between content */}
                <div className="flex flex-col">
                    <p className="font-bodyFont font-bold text-md"> 
Passionate and driven, I am a creative professional with a flair for design and a love for problem-solving. With a solid background in graphic design and a keen eye for detail, I strive to deliver visually captivating solutions that leave a lasting impact. Let's bring your ideas to life together. </p>
                    <h1 className="font-titleFont font-extrabold text-xl md:text-4xl mx-auto border-b-[5px] border-orange-400 mt-16 mb-16">
                        Education 
                    </h1>
                    <div className="flex flex-col gap-16">
                    <div className="flex flex-row font-bodyFont text-md md:text-2xl">
                        <div>
                        <h2 className="text-lg md:text-3xl font-titleFont font-bold"> Secondary Education </h2> <br/>
                        Public Secondary Boarding School <br/>
                        SLC <br/>
                        Pyuthan Municipality, Pyuthan <br/>
                        </div>
                    </div>
                    <div className="font-bodyFont text-md md:text-2xl">
                    <h2 className=" text-lg md:text-3xl font-titleFont font-bold"> High School Education </h2> <br/>
                        New Summit College <br/>
                        +2 <br/>
                        Maitidevi, Kathmandu <br/>
                    </div>
                    <div className="font-bodyFont text-md md:text-2xl">
                    <h2 className="text-lg md:text-3xl font-titleFont font-bold"> Undergraduate Degree  </h2> <br/>
                        Paschimanchal Campus, IOE, TU <br/>
                        Bachelors in Electronics, Communication and Information Engineering <br/>
                        Lamachaur, Pokhara <br/>
                    </div>
                    </div>
                </div>

            </div>
        </section>
    )
}