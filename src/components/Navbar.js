import React from "react";
export default function Navbar(props) {
  return (
    <nav>
      <ul className="flex flex-row bg-blue-800 py-5">
        <li className="font-mono text-white basis-2/3 text-center ">Jagdish Yogi</li>
        <li className="font-mono text-white basis-1/6 text-center"> Home </li>
        <li className="font-mono text-white basis-1/6 text-center"> About </li>
        <li className="font-mono text-white basis-1/6 text-center"> Contact Me</li>
      </ul>
    </nav>
  );
}
