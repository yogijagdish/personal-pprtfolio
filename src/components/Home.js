import React from "react";
import background from "../images/background.jpg"
import image from "../images/images.jpeg"

export default function Home(props) {
    return (
        <>
        <div style={{backgroundImage: `url(${image})`}}>
            Hi <br />
             It's Jagdish Yogi.
             <br/>
            Student of Electronics, Communication and Engineering.
            <br/>
            This is Frontend developer, Backend developer and blockchain Engineer.
             <img src={background} alt="myimage"/>
        </div>
            </>
    )
}
