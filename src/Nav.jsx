import React, { useState } from "react";
import Contact from "./Contact.jsx";
import { Link } from "react-router-dom";
import Product from "./Product.jsx";

const Nav = () => (
  <>

  <nav className=" flex justify-around  text-center items-center h-16 " >
    <div className="logo" >
      <img src="https://chowk-bazar-test-web.netlify.app/images/logo.svg" alt="" />
    </div>
    

      <ul className=" flex ">

        <li className="hover:text-teal-500 cursor-pointer" >Home</li>
        <li className="ms-6 hover:text-teal-500 cursor-pointer"><Link to= "./Product">Product</Link></li>
        <li className="ms-6 hover:text-teal-500 cursor-pointer"><Link to= "./Contact">Contact</Link></li>
      </ul>
    
    
      <button
      type="button"
      className=" text-black inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none  "
    >
      Get Started
    </button>
    
  </nav>
    

  </>
);

export default Nav;
