import React, {useEffect} from "react";

import AOS from "aos";

import "aos/dist/aos.css";

export default function Education() {

    useEffect(()=> {
        AOS.init();
        AOS.refresh();
    },[]);

    return (
        <section className="bg-secondBackgroundColour text-textColour md:p-16 md:pb-44 scroll-smooth" id="education">
            <div className="flex flex-col">

            <div className="font-titleFont font-extrabold text-center text-2xl md:text-6xl mx-auto py-6 border-b-[5px] border-indigo-600"
             data-aos="fade-up"
             data-aos-duration="1000">
                My Education
            </div>
            <div className="  grid sm:grid-cols-2 mt-16 md:grid-cols-3 items-center place-content-center align-center justify-between">
                <div className="border-2 rounded-lg mx-4 my-4 border-gray-900 md:w-96 inline-block h-96"
                           data-aos="fade-right"
                           data-aos-easing="ease-in-sine"
                           data-aos-duration="1000">
                     <h1 className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl ml-20 mt-16 md:mt-8"> Secondary Education </h1> 
                     <p className="font-bodyFont text-sm md:text-xl mx-4 mt-12 md:mt-8"> Passed SLC from Public Secondary English Boarding School <br/><br/>
                     Dakhaquady-6, Pyuthan <br/> <br/>
                    2064 ---- 2072
                    </p>
                </div>

                <div className="border-2 rounded-lg mx-4 my-4 border-gray-900 md:w-96 h-96"
                 data-aos="zoom-in"
                 data-aos-duration="1000">
                     <h1 className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl mt-16 md:mt-4 ml-12 md:ml-20"> Higher Secondary Education </h1> 
                     <p className="font-bodyFont text-sm md:text-xl mx-4 mt-12 md:mt-8"> Passed +2 in Science from New Summit College <br/><br/>
                     Maitidevi, Kathmandu <br/> <br/>
                    2073 ---- 2074
                    </p>
                </div>
                
                <div className="border-2 rounded-lg mx-4 my-4 border-gray-900 md:w-96 h-96"
                 data-aos="fade-left"
                 data-aos-easing="ease-in-shine"
                 data-aos-duration="1000">
                     <h1 className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl mt-16 md:mt-4 ml-16 md:ml-12"> Undergraduate </h1> 
                     <p className="font-bodyFont text-sm md:text-xl mx-4 mt-12 md:mt-8"> Passed Bachelor's in Electronics,Communication and Information Engineering from Paschmanchal Campus, IOE, TU <br/><br/>
                     Lamachaur-16, Pokhara <br/><br/>
                    2075 ---- 2080
                    </p>
                </div>
            </div>
            </div>
        </section>
    )
}