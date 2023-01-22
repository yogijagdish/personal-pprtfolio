import React from "react";
import { useState } from "react";

export default function Contact(){

    const [firstName, setFirstName] = useState("First Name")

    const handleOnFocus = (event) => {
        setFirstName("");
    }

    const handleOnChange = (event) => {
        setFirstName(event.target.value);
    }

    return(
        <div className="mb-16 border-2 rounded-3xl border-red-500 ml-64 mr-64 mt-16 text-center bg-lime-600">
            <h1 className="mt-8 text-3xl text-emerald-400 font-medium">Get in Touch With Me </h1>
            <form>
                <label htmlFor="Name" className="grid grid-cols-3">
                    {/* <span className="mt-8 block text-lg font-medium text-slate-700"> First Name</span>
                    <span className="mt-8 block text-lg font-medium text-slate-700"> Middle Name</span>
                    <span className="mt-8 block text-lg font-medium text-slate-700"> Last Name</span> */}

                    <input type="text" name="first_name" id="name1" value={firstName} onFocus={handleOnFocus} onChange={handleOnChange} className="ml-32 w-64 border-2 border-emerald-200 focus:outline-none focus:border-sky-500"/>
                    <input type="text" name="middle_name" id="name2" className="ml-32 w-64 border-2 border-emerald-200 focus:outline-none focus:border-sky-500"/>
                    <input type="text" name="last_name" id="name3" className="ml-32 w-64 border-2 border-emerald-200 focus:outline-none focus:border-sky-500"/>
                </label>
                <label htmlFor="email">
                    <span className="mt-16 block text-lg font-medium text-slate-700"> Email </span>
                    <input type="email" name="email_id" id="email" value="example@email.com"  className="w-64 border-2 border-emerald-200 focus:outline-none focus:border-sky-500"/>
                </label>
                <label htmlFor="location">
                    <span className="mt-16 block text-lg font-medium text-slate-700"> Location </span>
                    <input type="text" name="loaction" value="city,country" className="w-64 border-2 border-emerald-200 focus:outline-none focus:border-sky-500"/>
                </label>
                <label htmlFor="message">
                    <span className="mt-16 block text-lg font-medium text-slate-700"> Message </span>
                    <textarea name="message" id="message" cols="50" rows="5" className="mb-8 w-64 border-2 border-emerald-200 focus:outline-none focus:border-sky-500"/>
                </label>
            </form>

        </div>
    );
}