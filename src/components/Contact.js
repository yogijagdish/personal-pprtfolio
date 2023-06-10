import React from "react";
import { useState } from "react";

import { pp } from "../images/images";

export default function Contact() {

    const [formData,setFormData] = useState({name:"",email:"",subject:"",message:""});

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <section className="bg-gray-900 text-white py-8" id="contact">
            <div className="flex flex-col">
            <h1 className="font-titleFont font-extrabold text-2xl md:text-4xl mx-auto text-center border-b-[5px] border-indigo-600 mt-16"> Contact </h1>
            </div>
            <div className="grid gap-16 md:grid-cols-2 place-content-center items-center mt-16">
                <div className="ml-8"> 
                    <form onSubmit={handleSubmit} className="grid gap-6">
                        <div className="flex flex-col md:flex-row gap-4">
                        <label htmlFor="Name" className="font-titleFont font-bold text-xl"> Name:  <input type="text" name="name" id="name" className="h-8 w-56 ml-4 border-2 rounded-lg text-md text-gray-900" onChange={handleChange}/></label>
                        <label htmlFor="Email Id" className="font-titleFont font-bold text-xl"> Email:  <input type="email" name="email" id="email" placeholder="email@email.com" className="h-8 w-56 ml-4 border-2 rounded-lg text-gray-900 text-md" onChange={handleChange}/></label>
                        </div>
                        <label htmlFor="Subject" className="font-titleFont font-bold text-xl"> Subject:  <input type="text" name="subject" id="subject" className="h-8 w-52 md:w-56 ml-4 border-2 rounded-lg text-gray-900 text-md" onChange={handleChange}/></label>

                        <label htmlFor="Message" className="font-titleFont font-bold text-xl"> Message:  </label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder="Enter your Message" className="border-2 rounded-lg text-md text-gray-900" onChange={handleChange}/>

                        <button type="submit" className="font-titleFont font-bold text-xl bg-blue-600 h-8 w-32 rounded-lg"> Submit </button>
                    </form>
                </div>
                <div className="grid place-content-center"> 
                    <img src={pp} alt="gif images" className="h-64"/>    
                </div>
            </div>
        </section>
    )
}