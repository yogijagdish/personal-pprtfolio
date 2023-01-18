import React from "react";
import down from "../Gallary/down.png"

export default function Contact(){
    return(
        <div>
            Get in Touch With Me:
            <form className="gird grid-cols-3">
                <div>
                <label htmlFor="first name"> First Name </label> <br />
                <input type="text" name="first name" className="border-2 border-rose-500"/>
                </div>
                <div>
                <label htmlFor="middle name"> Middle Name</label> <br />
                <input type="text" name="middle name" className="border-2 border-rose-500"/>
                </div>
                <div>
                <label htmlFor="last name"> Last Name</label> <br />
                <input type="text" name="last name" className="border-2 border-rose-500"/>
                </div>
            </form>

        </div>
    );
}