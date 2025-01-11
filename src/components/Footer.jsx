// import React from 'react'

// const Footer = () => {
//   return (
//     <div>Footer</div>
//   )
// }

// export default Footer


import React from 'react';

const Footer = () => {
  return (
    <footer  className="bg-purple-600 text-white  p-6 mt-16  bottom-10 w-full" style={{marginTop:'500px'}}>
      <div className="container mx-auto flex flex-wrap justify-between items-center ps-3 text-lg" >
        {/* Left Section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 pe-20 ">
          <h2 className=" font-bold mb-2 ms-1 mt-4">🚚 E cart</h2>
          <p className="text-base">
            Designed and built with all the love in the world by the Luminar team with the help of our contributors.
            <br />
            Code licensed Luminar, docs CC BY 3.0.
            <br />
            Currently v5.3.2.
          </p>
        </div>

        {/* Links Section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0 ps-5">
          <h3 className="text-lg font-semibold mb-2">Links</h3>
          <ul className="space-y-1">
            <li><a href="#landing" className="hover:underline">Landing Page</a></li>
            <li><a href="#home" className="hover:underline">Home Page</a></li>
            <li><a href="#history" className="hover:underline">Watch History Page</a></li>
          </ul>
        </div>

        {/* Guides Section */}
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h3 className="text-lg font-semibold mb-2">Guides</h3>
          <ul className="space-y-1">
            <li><a href="#react" className="hover:underline">React</a></li>
            <li><a href="#react-bootstrap" className="hover:underline">React Bootstrap</a></li>
            <li><a href="#react-router" className="hover:underline">React Router</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="w-full md:w-1/4">
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <div className="flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email here"
              className="p-2 rounded text-black w-full"
            />
            <button className="text-white hover:text-gray-300">→</button>
          </div>
          <div className="flex space-x-3 mt-2 text-base">
            <a href="#twitter" className="hover:text-gray-300">Twitter</a>
            <a href="#instagram" className="hover:text-gray-300">Instagram</a>
            <a href="#facebook" className="hover:text-gray-300">Facebook</a>
            <a href="#linkedin" className="hover:text-gray-300">LinkedIn</a>
            <a href="#github" className="hover:text-gray-300">GitHub</a>
            <a href="#phone" className="hover:text-gray-300">Phone</a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-10 text-base">
        Copyright © June 2024 Batch, E Cart. Built with React Redux.
      </div>
    </footer>
  );
};

export default Footer;
