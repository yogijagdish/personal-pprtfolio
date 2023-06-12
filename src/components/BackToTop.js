import React, { useEffect, useState } from "react";

import {FaArrowUp} from 'react-icons/fa';

export default function BackToTop() {

    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        setShowButton(scrollTop > 200);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(()=> {
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.removeEventListener('scroll',handleScroll);
        };
    },[]);


    return(
        <button
      className={`fixed bottom-4 right-4 w-10 h-10 bg-gray-500 text-white rounded-full p-2 flex items-center justify-center transition-opacity ${
        showButton ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={scrollToTop}
    >
      <FaArrowUp />
    </button>
    )
}