import React from "react";

import projects from "../customCSS/projects.js";


export default function Projects() {
    return(
        <section className="bg-gray-900 text-white" id="projects">
            <div className="container md:mx-auto grid">
                <div className="information-about-projects mt-6">
                    <h1 className="font-titleFont font-extrabold text-center text-2xl md:text-6xl py-6 border-b-[5px]"> Projects </h1>
                    <p className="font-bodyFont text-xl mt-4 pb-6"> Here are links of some of my projects I have done during my leisure time and college time </p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">

                    {projects.map((projects,i) => {
                        return (
                            <div className="relative " key={i}>
                                <img src={projects.img} alt={projects.title} className="h-64 w-96 mt-8"/>
                                <div className="font-titleFont font-extrabold text-2xl mt-4">{projects.title}</div>
                                <div className="flex mx-8 absolute left-4 bottom-20 w-[70%] md:w-[60%] h-[50%] bg-gray-600 opacity-0 duration-500 justify-center flex-col hover:opacity-100"  >
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