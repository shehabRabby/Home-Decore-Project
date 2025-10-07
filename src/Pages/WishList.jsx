
import React, { useEffect, useState } from "react";

import {BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,} from "recharts";
import { loadWishList } from "../Utilities/localStorage";

const WishList = () => {
  const [wishList, setWishList] = useState(() => loadWishList());
  const [sortOrder, setSortOrder] = useState("none");
 
//   useEffect(() => {
//     const saveList = JSON.parse(localStorage.getItem("wishList"));
//     if (saveList) {
//       setWishList(saveList);
//     }
//   }, []);

  const sortedItem = (() => {
    if (sortOrder === "asc") {
      return [...wishList].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "desc") {
      return [...wishList].sort((a, b) => b.price - a.price);
    } else {
      return wishList;
    }
  })();

 

  const handleRemoveFromWishlist = (id) => {
    const existingList = JSON.parse(localStorage.getItem("wishList"));
    let updatedList = existingList.filter((p) => p.id !== id);

    setWishList(updatedList);

    localStorage.setItem("wishList", JSON.stringify(updatedList));
    alert("Remove to wishlist!");
  };

  
  return (
    <div className="container mx-auto px-5 py-10">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-3">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">
          ❤️ Your Wishlist ({wishList.length})
        </h1>
        <div className="inline-block relative w-48">
          <select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            className="block w-full px-4 py-2 pr-8 bg-white border border-gray-300 rounded-xl shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 transition-all duration-200"
          >
            <option value="none">Sort By Price</option>
            <option value="asc">Low To High</option>
            <option value="desc">High To Low</option>
          </select>
          {/* Dropdown Arrow */}
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Wishlist Grid */}
      {wishList.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedItem.map((p) => (
            <div
              key={p.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-60 object-cover"
                />
                <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-sm rounded-full">
                  ${p.price}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col justify-between flex-grow">
                <div>
                  <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2">
                    {" "}
                    {p.title}
                  </h2>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                    {p.description || "No description available."}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-auto">
                  <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition">
                    View 🔍
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(p.id)}
                    className="text-red-500 hover:text-red-600 font-semibold transition"
                  >
                    Remove ❌
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="Empty Wishlist"
            className="w-48 mx-auto mb-6 opacity-80"
          />
          <h2 className="text-2xl font-semibold text-gray-600">
            Your wishlist is feeling lonely 😢
          </h2>
          <p className="text-gray-400 mt-2">Add something you love!</p>
        </div>
      )}

      {/* Charts */}
      {/* <div className="space-y-3 my-5">
        <h3>wishList Summary</h3>
        {
             wishList.length > 0 && <div className='border rounded-xl p-4 h-80'>
                                    <ResponsiveContainer width="100%" height="100%">
                                       <BarChart data={wishList} >
                                         <CartesianGrid strokeDasharray="3 3" />
                                         <XAxis dataKey="category" />
                                         <YAxis />
                                         <Tooltip />
                                         <Legend />
                                         <Bar dataKey="price" fill="#ef4444"/>
                                       </BarChart>
                                    </ResponsiveContainer>
                              </div>
        }
      </div> */}



        {/* same chart design different  */}
        <div className="space-y-5 my-6 bg-gradient-to-br from-rose-100 via-orange-100 to-yellow-50 p-6 rounded-2xl shadow-lg border border-rose-200">
            <h3 className="text-2xl font-semibold text-gray-800 text-center tracking-wide">
              Wishlist Summary
            </h3>

             {wishList.length > 0 ? (
               <div className="border border-rose-300 rounded-2xl bg-white/80 backdrop-blur-md shadow-xl p-5 h-80">
                 <ResponsiveContainer width="100%" height="100%">
                   <BarChart data={wishList} margin={{ top: 20, right: 30, left: 0, bottom: 10 }}>
                     <defs>
                       <linearGradient id="barColor" x1="0" y1="0" x2="0" y2="1">
                         <stop offset="0%" stopColor="#f87171" stopOpacity={0.9} />
                         <stop offset="100%" stopColor="#fb923c" stopOpacity={0.9} />
                       </linearGradient>
                     </defs>
           
                     <CartesianGrid strokeDasharray="3 3" stroke="#fca5a5" opacity={0.4} />
                     <XAxis dataKey="category" tick={{ fill: '#ef4444', fontWeight: 600 }} axisLine={false}/>
                     <YAxis tick={{ fill: '#fb923c', fontWeight: 600 }} axisLine={false}/>
                     <Tooltip contentStyle={{
                         backgroundColor: 'rgba(255,255,255,0.9)',
                         borderRadius: '12px',
                         border: '1px solid #fca5a5',
                       }}
                       labelStyle={{ color: '#ef4444', fontWeight: 600 }}
                     />

                     <Legend wrapperStyle={{
                         paddingTop: 10,
                         fontWeight: 600,
                         color: '#fb7185',
                       }}
                     />

                     <Bar dataKey="price" fill="url(#barColor)" radius={[8, 8, 0, 0]} barSize={45}/>
                   </BarChart>
                 </ResponsiveContainer>
               </div>
             ) : (
               <p className="text-center text-gray-500 italic">
                 No items in your wishlist yet ✨
               </p>
             )}
        </div>
  








    </div>
  );
};

export default WishList;
