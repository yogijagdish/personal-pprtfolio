import React, {useState, useEffect, useRef } from "react";

import emailjs from "@emailjs/browser";

import { pp } from "../images/images";

import AOS from "aos";

import "aos/dist/aos.css";


export default function Contact() {
  const form = useRef();
  
  const [positiveEmailStatus, setPositiveEmailStatus] = useState();

  const [negativeEmailStatus, setNegativeEmailStatus] = useState();

  const [status,setStatus] = useState(false);

  if (status === true) {
    setTimeout(()=>{
      setStatus(false);
    },5000);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_iwepqgr",
        "template_7g5dsrg",
        form.current,
        "qTMVgcyPtXlRldlbk"
      )
      .then(
        (result) => {
          console.log(result.text);
          setPositiveEmailStatus("Your data has been sent")
          setNegativeEmailStatus(false)
        },
        (error) => {
          console.log(error.text);
          setNegativeEmailStatus("Some Error Occured")
          setPositiveEmailStatus(false)
        }
      );
      e.target.reset();
      setStatus(true);
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section className="bg-backgroundColour text-textColour py-8" id="contact">
      
      <div className="flex flex-col">
        <h1
          className="font-titleFont font-extrabold text-2xl md:text-4xl mx-auto text-center border-b-[5px] border-orange-400 mt-16"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          {" "}
          Contact{" "}
        </h1>
      </div>
      <div className="grid gap-16 md:grid-cols-2 place-content-center items-center mt-16">

        {/* contact form */}
        <div className="p-8" data-aos="fade-right" data-aos-duration="1000">
          <form ref={form} onSubmit={sendEmail} className="flex flex-col">

            {/* name and email */}
            <div className="flex flex-col md:flex md:flex-row gap-4">
            <label className="font-titleFont font-bold text-lg">Name: 
            <input type="text" name="user_name" className="ml-3 h-8 w-64 rounded-lg"/> </label>
            <label className="font-titleFont font-bold text-lg">Email:
            <input type="email" name="user_email" className="ml-4 md:ml-2 h-8 w-64 rounded-lg"/> </label>
            </div>



            {/* subject */}
            <label className="mt-4 font-titleFont font-bold text-lg">Subject:
            <input type="text" name="subject" className="ml-4 h-8 w-64 rounded-lg"/></label>


            {/* message */}
            <label className="font-titleFont font-bold text-lg mt-4">Message</label>
            <textarea name="message" rows="8" className="rounded-lg"/>
            <div className="flex items-center place-content-center">
            <input type="submit" value="Send" className="h-8 w-32 mt-4 bg-blue-400 rounded-2xl hover:bg-blue-600 hover:scale-110"/>
            </div>
          </form>
            {status && positiveEmailStatus ? <p className="p-2 mt-4 bg-green-500 font-titleFont font-extrabold text-lg"> {positiveEmailStatus} </p>:null}
            
          {status && negativeEmailStatus ? <p className="p-2 mt-4 bg-red-500 font-titleFont font-extrabold text-lg"> {negativeEmailStatus} </p>:null}
        </div>


        {/* gif image */}
        <div
          className="grid place-content-center"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img src={pp} alt="gif images" className="h-64" />
        </div>
      </div>
    </section>
  );
}
