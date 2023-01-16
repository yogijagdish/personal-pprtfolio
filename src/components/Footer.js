import React from "react";
import footer_image from "../Footer/footer.js";

export default function Footer() {
  return (
    <div className="bg-slate-400">
      <p className="text-3xl text-center"> Can Connect With Me in: </p>
      <img
        src={footer_image.instagram}
        alt="logo of instagram"
        className="h-16"
      />
      <img
        src={footer_image.facebook}
        alt="logo of facebook"
        className="h-16"
      />
      <img src={footer_image.twitter} alt="logo of twitter" className="h-16" />
      <img
        src={footer_image.linkedin}
        alt="logo of linkedin"
        className="h-16"
      />
      <img src={footer_image.github} alt="logo of github" className="h-16" />
    </div>
    
  );
}
