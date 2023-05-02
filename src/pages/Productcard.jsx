import React from "react";

function ProductCard({ product }) {
  return (
    <div className=" overflow-hidden bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:bg-grey-700 font-bold py-2 px-4 transition ease-in-out duration-300 transform hover:-translate-y-1 hover:scale-110" >
    
      <img
        src={product.productImg}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold mb-2">{product.name}</h2>
        <p className="font-bold text-xl mb-2">Rp.{product.price}</p>
        <p className="text-gray-700">{product.category}</p>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{product.desk}</p>
      </div>
    </div>
  );
}

export default ProductCard;
