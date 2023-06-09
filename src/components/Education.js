import React from "react";

export default function Education() {
    return (
        <section className="bg-gray-700 text-white" id="education">
            <div className="container mx-auto flex items-center justify-center font-titleFont font-extrabold text-2xl md:text-6xl border-b-[5px] py-8">
                My Education
            </div>
            <div className="grid md:grid-cols-3 items-center md:justify-between">
                <div className="border-2 rounded-lg mx-4 my-4 border-gray-900 md:w-96 inline-block p-3">
                     <p className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl mt-4 ml-20 py-8"> Secondary Education </p> 
                     <p className="font-bodyFont text-sm md:text-xl mx-4 mt-8"> Passed SLC from Public Secondary English Boarding School <br/><br/>
                     Dakhaquady-6, Pyuthan <br/> <br/>
                    2064 ---- 2072
                    </p>
                </div>

                <div className="border-2 rounded-lg mx-4 my-4 border-gray-900 md:w-96 inline-block p-3">
                     <p className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl mt-4 ml-12 md:ml-20 py-8"> Higher Secondary Education </p> 
                     <p className="font-bodyFont text-sm md:text-xl mx-4 mt-8"> Passed +2 from New Summit College <br/><br/>
                     Maitidevi, Kathmandu <br/> <br/>
                    2073 ---- 2074
                    </p>
                </div>
                
                <div className="border-2 rounded-lg mx-4 my-4 border-gray-900 md:w-96 inline-block p-8">
                     <p className="font-titleFont font-extrabold mx-auto text-xl md:text-4xl mt-4 ml-12 md:ml-6 py-8"> Undergraduate </p> 
                     <p className="font-bodyFont text-sm md:text-xl mx-4 mt-8"> Passed Bachelor's in Electronics,Communication and Information Engineering from Paschmanchal Campus, IOE, TU <br/><br/>
                     Lamachaur-16, Pokhara <br/><br/>
                    2075 ---- 2080
                    </p>
                </div>
            </div>
        </section>
    )
}