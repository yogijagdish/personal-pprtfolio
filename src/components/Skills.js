import React from "react";

import { c_programming,
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
tailwindcss } from "../images/images";

export default function Skills() {
    return (
        <section className="bg-gray-700 text-white" id="skills">
            <div className="flex flex-col">

            <div className="font-titleFont font-extrabold mx-auto text-2xl md:text-6xl py-6 text-center border-b-[5px] border-indigo-600">
                Skills
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center">
                Programming Skills
                <div className="grid grid-cols-4 gap-4 mt-4">
                    <img src={c_programming} alt="c_logo" className="h-16"/>
                    <img src={cplusplus_programming} alt="c_logo" className="h-16"/>
                    <img src={js_programming} alt="c_logo" className="h-16"/>
                    <img src={python} alt="c_logo" className="h-16"/>
                </div>
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center">
                FrontEnd Skills
                <div className="grid grid-cols-3 md:grid-cols-6 gap-4 mt-4">
                <img src={html} alt="c_logo" className="h-16"/>
                <img src={css} alt="c_logo" className="h-16"/>
                <img src={tailwindcss} alt="c_logo" className="h-16"/>
                <img src={js_programming} alt="c_logo" className="h-16"/>
                <img src={react} alt="c_logo" className="h-16"/>
                <img src={redux} alt="c_logo" className="h-16"/>
                </div>
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center">
                Backend SKills
                <div className="grid grid-cols-3 gap-4 mt-4">
                <img src={python} alt="c_logo" className="h-16"/>
                <img src={django} alt="c_logo" className="h-16"/>
                <img src={drf} alt="c_logo" className="h-16"/>
                </div>
            </div>
            <div className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl py-6 text-center">
                Other Skills
                <div className="grid grid-cols-2 gap-4 mt-4">
                    <img src={git} alt="git" className="h-16"/>
                    <img src={githubimg} alt="github" className="h-16"/>
                </div>
            </div>
            </div>
        </section>
    )
}