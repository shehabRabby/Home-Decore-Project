import React from "react";
import { Link } from "react-router";

const ProductCard = ({product}) => {
    const { id,name, price, category, stock, image } = product;


  return (
    <div>
      <div className="bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-600 hover:-translate-y-1 border border-white/40">
        
        {/* Product Image */}
        <div className="relative">
          <img src={image} alt={name} className="w-full h-64 object-cover" />
          {stock ? (
            <span className="absolute top-3 left-3 bg-green-100 text-green-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">In Stock</span>
          ) : (
            <span className="absolute top-3 left-3 bg-red-100 text-red-600 text-xs font-semibold px-3 py-1 rounded-full shadow-sm">Out of Stock</span>)}
        </div>

        {/* Card Info */}
        <div className="p-5 flex flex-col gap-2">
          <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
          <p className="text-sm text-purple-600 font-medium">{category}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-xl font-bold text-pink-500">${price}</span>
            <Link to={`/productDetails/${id}`} className="btn btn-sm bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform">View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
