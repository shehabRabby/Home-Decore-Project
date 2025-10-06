import React from "react";
import useProducts from "../hooks/useProducts";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const { products } = useProducts();

  return (
    <div className="container mx-auto my-10">

      <div className="flex flex-col sm:flex-row sm:items-center justify-between my-8 mx-6 bg-white/60 backdrop-blur-md py-4 px-6 rounded-2xl shadow-sm border border-white/40 gap-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">🛋️ All <span className="text-pink-500">Products</span>{" "}
          <span className="text-gray-500 text-base font-medium">({products.length})</span>
        </h1>

        {/* Search Section */}
        <div className="flex items-center gap-2">
          <input type="text" placeholder="Search your decor..." className="input input-bordered rounded-xl bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-300 w-48 sm:w-64 text-gray-700 placeholder:text-gray-400"/>
          <button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform shadow-md">Search</button>
        </div>
      </div>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>

      
    </div>
  );
};

export default Products;
