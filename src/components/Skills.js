import React from 'react';
import images from '../images/Logo.js'


export default function Skills () {
    return (
        <div className="font-mono text-center subpixel-antialiased bg-slate-800 text-slate-300 p-5">

        <h3 className='text-3xl font-semibold mb-8'> My Skills </h3>
        <div className='grid grid-cols-3 justify-items-center gap-x-10 gap-y-20'>

        <div>
            <img src={images.logohtml} alt="logo of html" className='mx-auto-8 w-12'/>
            <h4 className='text-xl font-medium'> HTML </h4>
            <p> HTML (Hypertext Markup Language) is a standard markup language used for creating and structuring content on the World Wide Web. It is the foundation of most websites and is used to define the structure and layout of web pages, as well as to add content such as text, images, and multimedia. </p>
        </div>
        <div>
            <img src={images.logocss} alt="logo of css" className='w-12'/>
            <h4 className='text-xl font-medium'> CSS </h4>
            <p>CSS (Cascading Style Sheets) is a stylesheet language used for describing the look and formatting of a document written in HTML. It is a powerful tool for controlling the appearance and layout of web pages, and can be used to specify things like font size, color, and spacing, as well as more advanced features such as animations and responsive design.</p>


        </div>
        <div>
            <img src={images.logojs} alt="logo of js" className='w-20'/>
            <h4 className='text-xl font-medium'> JavaScript </h4>
            <p> JavaScript is a programming language that is commonly used to add interactivity and dynamic behavior to websites. It is a client-side language, which means that it is executed by the user's web browser rather than on a server.

</p>
        </div>
        <div>
            <img src={images.logoc} alt="logo of c" className='w-12'/>
            <h4 className='text-xl font-medium'> C </h4>
            <p>
            C is a general-purpose, imperative programming language that was developed in the early 1970s. It is a high-level language, which means that it is designed to be easy for humans to read and write, and is compiled into machine code that can be run on a computer.


            </p>
        </div>
        <div>
            <img src={images.logocplus} alt="logo of C++" className='w-12'/>
            <h4 className='text-xl font-medium'> C++ </h4>
            <p> C++ is an object-oriented, high-performance programming language that was developed as an extension of the C programming language. It was designed to be an efficient, flexible, and powerful language, and is widely used in a variety of applications, including operating systems, web browsers, games, and scientific simulations.

</p>
        </div>
        <div>
            <img src={images.logodjango} alt="logo of django" className='w-12'/>
            <h4 className='text-xl font-medium'> Django </h4>
            <p> Django is a high-level Python web framework that is designed for rapid development and clean, pragmatic design. It is a free and open-source framework that follows the model-template-view (MTV) architectural pattern.

</p>
        </div>
        <div>
            <img src={images.logodjangorest} alt="logo of django rest framework" className='w-12'/>
            <h4 className='text-xl font-medium'>    Django REST Framework </h4>
            <p> Django REST framework is a powerful and flexible toolkit for building APIs (Application Programming Interfaces) in the Django web framework. It is designed to make it easy to build APIs that allow clients, such as mobile apps or web applications, to interact with your Django-powered backend.

</p>
        </div>
        <div>
            <img src={images.logopython} alt="logo of python" className='w-12'/>
            <h4 className='text-xl font-medium'> Python </h4>
            <p> Python is a high-level, general-purpose programming language that is widely used in a variety of applications, including web development, scientific computing, data analysis, and artificial intelligence. It is known for its simplicity, readability, and flexibility, and has a large and active community of users and developers.

</p>
        </div>
        <div>
            <img src={images.logoreact} alt="logo of react" className='w-12'/>
            <h4 className='text-xl font-medium'> React </h4>
            <p> React is a JavaScript library for building user interfaces, created and maintained by Facebook. It is designed to make it easy to build reusable components that can be rendered on the server or the client, and can be used with a variety of other libraries and frameworks.

</p>
        </div>
        <div>
            <img src={images.logosolidity} alt="logo of Solidity" className='w-12'/>
            <h4 className='text-xl font-medium'> Solidity </h4>
            <p> Solidity is a programming language used to write smart contracts for the Ethereum blockchain. It is a high-level, object-oriented language that is designed to be easy to read and write, and is compiled into bytecode that can be executed on the Ethereum Virtual Machine (EVM).

</p>
        </div>
        </div>
        </div>
    )
}