import React, {useEffect} from "react";

import {
    c_programming,
    cplusplus_programming,
    django,
    drf,
    git,
    githubimg,
    js_programming,
    python,
    react,
    redux,
    html,
    css,
    tailwindcss
    } from "../images/images";


import AOS from "aos";

import "aos/dist/aos.css";

export default function Skills() {

    useEffect(()=>{
        AOS.init();
        AOS.refresh();
    },[]);


    return (
        <section className="bg-gray-700 text-white scroll-smooth" id="skills">
            <div className="flex flex-col">

            <div className="font-titleFont font-extrabold mx-auto text-2xl md:text-6xl py-6 text-center border-b-[5px] border-indigo-600 mt-16"
            data-aos="fade-up"
            data-aos-duration="1000">
                Skills
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center mt-20">
                Programming Skills
                <div className="grid grid-cols-2 mx-8 md:grid-cols-4 gap-y-8 md:gap-64 mt-16">
                    <img src={c_programming} alt="c" className="h-24" 
                    data-aos="fade-right"
                    data-aos-duration="1000"/>
                    <img src={cplusplus_programming} alt="cplusplus" className="h-24"
                    data-aos="fade-right"
                    data-aos-duration="1000"/>
                    <img src={js_programming} alt="javascript" className="h-24"
                    data-aos="fade-left"
                    data-aos-duration="1000"/>
                    <img src={python} alt="python" className="h-24"
                    data-aos="fade-left"
                    data-aos-duration="1000"/>
                </div>
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center mt-16">
                FrontEnd Skills
                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-16 md:gap-x-64 gap-y-8 md:gap-y-24 mt-16">
                <img src={html} alt="html" className="h-24"
                data-aos="fade-down"
                data-aos-duration="1000"/>
                <img src={css} alt="css" className="h-24"
                data-aos="fade-down"
                data-aos-duration="1000"/>
                <img src={tailwindcss} alt="tailwindcss" className="h-24"
                data-aos="fade-down"
                data-aos-duration="1000"/>
                <img src={js_programming} alt="javacsript" className="h-16"
                data-aos="fade-down"
                data-aos-duration="1000"/>
                <img src={react} alt="react" className="h-24"
                data-aos="fade-up"
                data-aos-duration="1000"/>
                <img src={redux} alt="redux" className="h-24"
                data-aos="fade-up"
                data-aos-duration="1000"/>
                </div>
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center mt-16">
                Backend SKills
                <div className="grid grid-cols-2 gap-y-8 md:grid-cols-3 md:gap-64 mt-16">
                <img src={python} alt="python" className="h-24" 
                data-aos="fade-right"
                data-aos-duration="1000"/>
                <img src={django} alt="django" className="h-24"
                data-aos="zoom-out"
                data-aos-duration="1000"/>
                <img src={drf} alt="django rest framework" className="h-24 w-32 ml-8"
                data-aos="fade-left"
                data-aos-duration="1000"/>
                
                </div>
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center mt-16">
                Other Skills
                <div className="grid grid-cols-2 gap-16 md:gap-64 mt-16">
                    <img src={git} alt="git" className="h-24"
                    data-aos="fade-right"
                    data-aos-duration="1000"/>
                    <img src={githubimg} alt="github" className="h-24"
                    data-aos="fade-left"
                    data-aos-duration="1000"/>

                </div>
            </div>
            </div>
        </section>
    )
}