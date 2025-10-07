import React from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";
import heroImg from "../assets/hero.jpg";

const Home = () => {
  const { products, loading, error } = useProducts();

  const featureProducts = products.slice(0, 7);
  return (
    <div className="container mx-auto my-10">

       <div className="max-w-[1250px] mx-auto mt-6 sm:mt-8 relative group">
          <div className="overflow-hidden rounded-2xl shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
            <img
              src={heroImg}
              alt="Hero Banner"
              className="w-full h-[220px] sm:h-[350px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
      
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
       </div>

        
      <div className="flex items-center justify-between my-8 mx-6 bg-white/60 backdrop-blur-md py-4 px-6 rounded-2xl shadow-sm border border-white/40">
        <h1 className="text-2xl md:text-3xl font-bold text-purple-700">✨ Feature <span className="text-pink-500">Products</span></h1>

        <Link to="/products" className="btn btn-sm bg-gradient-to-r from-pink-400 to-purple-500 text-white font-semibold border-none hover:scale-105 transition-transform shadow-md">
          View All →</Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-5">
        {featureProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
