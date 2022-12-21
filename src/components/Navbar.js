import React from "react";
export default function Navbar(props) {
  return (
    <nav>
      <ul className="flex flex-row bg-blue-800 py-5">
        <li className="font-mono text-white basis-2/3 text-center hover:text-lime-500">Jagdish Yogi</li>
        <li className="font-mono text-white basis-1/6 text-center hover:text-lime-500"> Home </li>
        <li className="font-mono text-white basis-1/6 text-center hover:text-lime-500"> About </li>
        <li className="font-mono text-white basis-1/6 text-center hover:text-lime-500"> Contact Me</li>
      </ul>
    </nav>
  );
}
