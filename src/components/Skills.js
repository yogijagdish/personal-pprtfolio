import React from 'react';
import images from '../images/Logo.js'


export default function Skills () {
    return (
        <>
        <h3> My Skills </h3>

        <div>
            <img src={images.logohtml} alt="logo of html" className='w-12'/>
            HTML 
        </div>
        <div>
            <img src={images.logocss} alt="logo of css" className='w-12'/>
            CSS
        </div>
        <div>
            <img src={images.logojs} alt="logo of js" className='w-12'/>
            JavaScript
        </div>
        <div>
            <img src={images.logoc} alt="logo of c" className='w-12'/>
            C 
        </div>
        <div>
            <img src={images.logocplus} alt="logo of C++" className='w-12'/>
            C++
        </div>
        <div>
            <img src={images.logodjango} alt="logo of django" className='w-12'/>
            Django
        </div>
        <div>
            <img src={images.logodjangorest} alt="logo of django rest framework" className='w-12'/>
            Django Rest Framework
        </div>
        <div>
            <img src={images.logopython} alt="logo of python" className='w-12'/>
            Python
        </div>
        <div>
            <img src={images.logoreact} alt="logo of react" className='w-12'/>
            React
        </div>
        <div>
            <img src={images.logosolidity} alt="logo of Solidity" className='w-12'/>
            Solidity
        </div>
        </>
    )
}