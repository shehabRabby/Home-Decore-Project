import React, { useEffect, useState } from 'react';

const WishList = () => {
    const [wishList, setWishList] = useState([]);
    const [sortOrder,setSortOrder] = useState('none');
    useEffect(()=> {
        const saveList = JSON.parse(localStorage.getItem("wishList"));
        if(saveList){
            setWishList(saveList);
        }
    },[])

    const sortedItem = (
        () => {
        if(sortOrder === 'asc'){
            return [...wishList].sort((a,b)=> a.price - b.price);
        }
        else if(sortOrder === 'desc'){
            return [...wishList].sort((a,b)=> b.price - a.price);
        }else{
            return wishList;
        }
    })()

     

    const handleRemoveFromWishlist = (id) => {
        const existingList = JSON.parse(localStorage.getItem("wishList"));
        let updatedList = existingList.filter (p => p.id !== id);
        
        setWishList(updatedList);

        localStorage.setItem("wishList",JSON.stringify(updatedList));
        alert("Remove to wishlist!")
    }


    return (
        <div className="container mx-auto px-5 py-10">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-3">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent drop-shadow-sm">❤️ Your Wishlist ({wishList.length})</h1>
               <div className="inline-block relative w-48">
                  <select value={sortOrder} onChange={e => setSortOrder(e.target.value)} className="block w-full px-4 py-2 pr-8 bg-white border border-gray-300 rounded-xl shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-500 transition-all duration-200">
                    <option value="none">Sort By Price</option>
                    <option value="asc">Low To High</option>
                    <option value="desc">High To Low</option>
                  </select>
                  {/* Dropdown Arrow */}
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
               </div>

            </div>
          
            {/* Wishlist Grid */}
            {wishList.length > 0 ? (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                   {sortedItem.map((p) => (
                     <div key={p.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
                       
                       {/* Image */}
                       <div className="relative">
                         <img src={p.image} alt={p.title} className="w-full h-60 object-cover"/>
                         <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-sm rounded-full">${p.price}</span>
                       </div>
             
                       {/* Content */}
                        <div className="p-5 flex flex-col justify-between flex-grow">
                            <div>
                              <h2 className="text-xl font-semibold mb-2 text-gray-800 line-clamp-2"> {p.title}</h2>
                              <p className="text-gray-500 text-sm line-clamp-2 mb-4">
                                {p.description || "No description available."}
                              </p>
                            </div>
                
                            <div className="flex justify-between items-center mt-auto">
                              <button className="text-emerald-600 font-semibold hover:text-emerald-700 transition">View 🔍</button>
                              <button onClick={() => handleRemoveFromWishlist(p.id)} className="text-red-500 hover:text-red-600 font-semibold transition">
                                Remove ❌
                              </button>
                            </div>
                         </div>
                     </div>
                   ))}
              </div>
            ) : (
               <div className="text-center py-20">
                 <img src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png" alt="Empty Wishlist" className="w-48 mx-auto mb-6 opacity-80"/>
                 <h2 className="text-2xl font-semibold text-gray-600">Your wishlist is feeling lonely 😢</h2>
                 <p className="text-gray-400 mt-2">Add something you love!</p>
               </div>
             )}

        </div>
    );
};

export default WishList;