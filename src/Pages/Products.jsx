import React, { useState } from "react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import heroImg from "../assets/heros2.png";

const Products = () => {
  const [search,setSearch] = useState('');
  const { products } = useProducts();

  // search Product 
  const term = search.trim().toLowerCase();
  const searchProducts = term ? products.filter(product => product.name.toLowerCase().includes(term)) : products;

  return (
    <div className="container mx-auto my-10">


      <div className="max-w-[1350px] mx-auto mt-6 sm:mt-8 px-3 sm:px-6 relative group p-2">
         <div className="overflow-hidden rounded-2xl shadow-lg">
           <img
             src={heroImg}
             alt="Hero Banner"
             className="w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-102"
           />
         </div>
       
         {/* Subtle gradient overlay */}
         <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
      </div>


      <div className="flex flex-col sm:flex-row sm:items-center justify-between my-8 mx-6 bg-white/60 backdrop-blur-md py-4 px-6 rounded-2xl shadow-sm border border-white/40 gap-4">
        {/* Title */}
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">🛋️ All <span className="text-pink-500">Products</span>{" "}
          <span className="text-gray-500 text-base font-medium">({searchProducts.length})</span>
        </h1>

        {/* Search Section */}
        <div className="flex items-center gap-2">
          <input value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search your decor..." className="input input-bordered rounded-xl bg-white/70 backdrop-blur-md focus:outline-none focus:ring-2 focus:ring-pink-300 w-48 sm:w-64 text-gray-700 placeholder:text-gray-400"/>
          <button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform shadow-md">Search</button>
        </div>
      </div>




      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {searchProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>

      
    </div>
  );
};

export default Products;
