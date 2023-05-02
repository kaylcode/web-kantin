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
    setCategory(event.target.value);
  };

  const handleSort = (event) => {
    setSortType(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  ).filter((product) => (category ? product.category === category : true));

  const sortedProducts = filteredProducts.sort((a, b) =>
    sortType === "asc" ? a.price - b.price : b.price - a.price
  );

  return (
    <div className="container mx-auto py-4">
      <form onSubmit={handleSearch} className="mb-4 justify-center">
        <div className="flex justify-between items-start">
          <input
            type="text"
            placeholder="Search products"
            className=" px-40 py-2.5 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">           
            Search
          </button>
        </div>
      </form>

      <div className="mb-4">
        <label htmlFor="category-select" className="mr-2">
          Filter by category:
        </label>
        <select
          id="category-select"
          value={category}
          onChange={handleCategory}
          className="bg-gray-200 py-2 px-4 rounded"
        >
          <option value="">All categories</option>
          <option value="Food">Food</option>
          <option value="Drink">Drink</option>
          <option value="Snack">Snack</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="sort-select" className="mr-2">
          Sort by price:
        </label>
        <select
          id="sort-select"
          value={sortType}
          onChange={handleSort}
          className="bg-gray-200 py-2 px-4 rounded"
        >
          <option value="asc">low price</option>
          <option value="desc">High Price</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sortedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
