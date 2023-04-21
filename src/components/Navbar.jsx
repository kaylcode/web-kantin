import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



function Navbar() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="container flex justify-around py-8 mx-auto bg-white">
      <div class="flex items-center">
        <img
          alt="..."
          src={require("../Img/logo-black.jpg")}
          className="rounded-full max-w-full mx-auto"
          style={{ maxWidth: "120px" }}
        />
      </div>
      <div class="items-center hidden space-x-8 lg:flex">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            navigate("/kantin");
          }}
        >
          Canteen
        </button>
        <button
          onClick={() => {
            navigate("/product");
          }}
        >
          Products
        </button>
        
        <button
          onClick={() => {
            navigate("/productlist");
          }}
        >
          ProductsList
        </button>
      </div>
    </div>
  );
}

export default Navbar;


