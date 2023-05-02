import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="container flex justify-around py-4 mx-auto bg-white">
      <div class="flex items-center">
        <img
          alt="..."
          src={require("../Img/logo-black.jpg")}
          className="rounded-full max-w-full mx-auto"
          style={{ maxWidth: "100px" }}
        />
      </div>
      <div class="items-center hidden space-x-8 lg:flex">
        
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <p class="items-center text-slate-500 hover:text-blue-600">Home</p>
        </button>
        <button
          onClick={() => {
            navigate("/kantin");
          }}
        >
        <p class="items-center text-slate-500 hover:text-blue-600">Canteen</p>

        </button>
        
        <button
          onClick={() => {
            navigate("/productlist");
          }}
        >
          <p class="items-center text-slate-500 hover:text-blue-600">Product</p>
        </button>
      </div>
    </div>
  );
}

export default Navbar;


