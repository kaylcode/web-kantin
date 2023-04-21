import React from "react";

function ProductCard({ product }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img
        src={product.productImg}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="font-bold mb-2">{product.name}</h2>
        <p className="font-bold text-xl mb-2">Rp.{product.price}</p>
        <p className="text-gray-700">{product.category}</p>
      </div>
    </div>
  );
}

export default ProductCard;
