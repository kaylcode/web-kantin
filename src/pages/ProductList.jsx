import React, { useState } from "react";
import ProductCard from "./Productcard";
import { PRODUCTS } from "./products";

function ProductList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");
  const [sortType, setSortType] = useState("asc");

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for", searchTerm);
  };

  const handleCategory = (event) => {
    const selectedCategory = event.target.value;
    setCategory(selectedCategory);
  }

  const handleSort = (event) => {
    const selectedValue = event.target.getAttribute("value");
    setSortType(selectedValue);
  };

  
  let sortedProducts = [...PRODUCTS]
  sortedProducts.sort((a, b) =>
  sortType === "asc" ? a.price - b.price : b.price - a.price
  );
  
  return (
    <div className="container mx-auto py-4">
      <form onSubmit={handleSearch} className="mb-4 justify-center">
        <div className="justify-between items-start">
          <input
            type="text"
            placeholder="Search products"
            className=" px-40 py-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-cyan-400 hover:bg-yellow-200 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Search
          </button>
        </div>
      </form>

      <div className="w-full mx-auto">
        <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
          <button
            type="button"
            className="text-white hover:text-black border border-blue-600 bg-cyan-400 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
            onClick={handleCategory}
            value=""
          >
            All categories
          </button>
          <button
            type="button"
            className="text-white hover:text-black border border-blue-600 bg-cyan-400 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-cyan-300 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
            onClick={handleCategory}
            value="Food"
          >
            Foods
          </button>
          <button
            type="button"
            className="text-white hover:text-black border border-blue-600 bg-cyan-400 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
            onClick={handleCategory}
            value="Drink"
          >
            Drinks
          </button>

          <button
            type="button"
            className="text-white hover:text-black border border-blue-600 bg-cyan-400 hover:bg-pink-300 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800"
            onClick={handleCategory}
            value="Snack"
          >
            Snacks
          </button>
        </div>
        <div className="mb-4">
          <div className="flex">
            <button
              className={`mr-2 py-2 px-4 rounded hover:bg-yellow-200 ${
                sortType === "asc" ? "bg-cyan-400  text-white" : "bg-gray-200"
              }`}
              onClick={handleSort}
              value="asc"
            >
              <span>&#x2191;</span>
            </button>
            <button
              className={`py-2 px-4 rounded hover:bg-yellow-200 ${
                sortType === "desc" ? "bg-cyan-400 text-white" : "bg-gray-200"
              }`}
              onClick={handleSort}
              value="desc"
            >
              <span>&#x2193;</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts
          .filter((product) =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .filter((product) => (category ? product.category === category : true))
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
      </div>
    </div>
  );
}

export default ProductList;
