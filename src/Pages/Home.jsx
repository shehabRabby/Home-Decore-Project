import React from "react";
import { Link } from "react-router";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts";

const Home = () => {
  const { products, loading, error } = useProducts();

  const featureProducts = products.slice(0, 7);
  return (
    <div className="container mx-auto my-10">
        
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
