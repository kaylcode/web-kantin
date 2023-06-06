import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="container flex justify-around py-0.5 mx-auto bg-white">
      <div class="flex items-center">
        <img
          alt="..."
          src={require("../Img/logocyan.png")}
          className="rounded-full max-w-full mx-auto"
          style={{ maxWidth: "100px" }}
        />
      </div>
      <div class=" hidden space-x-8 lg:flex">
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          <p class=" rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-cyan-300 hover:text-slate-900">
            Home
          </p>
        </button>
        <button
          onClick={() => {
            navigate("/kantin");
          }}
        >
          <p class=" rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-cyan-300 hover:text-slate-900">
            Canteen
          </p>
        </button>

        <button
          onClick={() => {
            navigate("/productlist");
          }}
        >
          <p class=" rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-cyan-300  hover:text-slate-900">
            Product
          </p>
        </button>

        <button
          onClick={() => {
            navigate("/about");
          }}
        >
          <p class=" rounded-lg px-3 py-2 text-slate-700 font-medium hover:bg-cyan-300  hover:text-slate-900">
            About{" "}
          </p>
        </button>
      </div>
      <div class="md:hidden flex items-center">
        <button class="outline-none mobile-menu-button">
          <svg
            class="w-6 h-6 text-gray-500"
            x-show="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
      </div>
    </div>
  );
}

export default Navbar;
