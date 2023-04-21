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
    <div className="container mx-auto p-4">
      <form onSubmit={handleSearch} className="mb-4">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search products"
            className="bg-gray-200 rounded-l py-2 px-4 w-full"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r"
          >
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
