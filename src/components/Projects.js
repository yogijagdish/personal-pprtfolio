import React, {useEffect} from "react";

import projects from "../customCSS/projects.js";

import AOS from "aos";

import "aos/dist/aos.css";



export default function Projects() {

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[]);

    return(
        <section className="bg-gray-900 text-white p-8 md:p-32 scroll-smooth" id="projects">
            <div className="container md:mx-auto grid">
                <div className="information-about-projects flex flex-col">
                    <h1 className="font-titleFont font-extrabold text-center text-2xl md:text-6xl mx-auto py-6 border-b-[5px] border-indigo-600"
                     data-aos="fade-up"
                     data-aos-duration="1000"> Projects </h1>
                    
                    <p className="font-bodyFont text-xl mt-4"> Here are links of some of my projects I have done during my leisure time and college time </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">

                    {projects.map((projects,i) => {
                        return (
                            <div className="relative " key={i}>
                                <img src={projects.img} alt={projects.title} className="h-64 w-96 mt-16" 
                                data-aos="zoom-in"
                                data-aos-duration="1000"/>
                                <div className="font-titleFont font-extrabold text-2xl mt-4">{projects.title}</div>
                                {/* this is the content that is displayed on hover */}
                                <div className="flex mt-16 absolute left-14 top-12 w-64 h-40 bg-gray-600 opacity-0 duration-500 justify-center flex-col hover:opacity-100"  >
                                    {/* this is about what to place in the center when hover */}
                                    <div className="flex justify-center items-center">

                                        <div className="font-titleFont font-bold text-2xl md:text-3xl"> 
                                            <a href={projects.code} className="hover:text-4xl md:hover:text-5xl hover:text-red-400 duration-500"> {projects.title} </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    
                </div>

            </div>
        </section>
    )
}