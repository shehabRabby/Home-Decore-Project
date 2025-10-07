import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';

const ProductDetails = () => {
    const {id} = useParams()
     const { products } = useProducts();
     const product = products.find(p=> p.id === parseInt(id));

      if (!product) {
         return (
           <div className="flex justify-center items-center h-[80vh] text-gray-500 text-lg">
             Loading product details... 🌀
           </div>
          );
       }

     const {name, price, category, stock, image, material, dimensions, description} = product || {};


    //  save LocalStorage 
    const handleAddToWishList = () => {
        const existingList = JSON.parse(localStorage.getItem("wishList"));
        let updatedList = [];
        if(existingList) {
            const isDuplicate = existingList.some(p=> p.id === product.id)
            if(isDuplicate){
                return alert("Already added")
            }
            updatedList = [...existingList,product];
        }else{
            updatedList.push(product);
        }

        localStorage.setItem("wishList",JSON.stringify(updatedList));
        alert("Added to wishlist!")
    }



    return (
        <div className="max-w-6xl mx-auto my-12 px-4 sm:px-8">
           <div className="flex flex-col md:flex-row gap-10 items-center bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-300 hover:shadow-2xl">
     
                {/* Image Section */}
                <div className="flex-1">
                  <img src={image} alt={name} className="w-full h-[300px] sm:h-[400px] object-cover rounded-2xl shadow-md transition-transform duration-500"/>
                </div>
        
                {/* Details Section */}
                <div className="flex-1 space-y-4">

                  <h1 className="text-3xl md:text-4xl font-semibold text-gray-800">{name}</h1>
                  <p className="text-lg text-gray-600">{description}</p>
        
                  <div className="space-y-2 text-gray-700">
                    <p><span className="font-semibold">Category:</span> {category}</p>
                    <p><span className="font-semibold">Material:</span> {material}</p>
                    <p><span className="font-semibold">Dimensions:</span> {dimensions}</p>
                    <p>
                      <span className="font-semibold">Availability:</span>{' '}
                      {stock ? ( <span className="text-green-600 font-medium">In Stock ✅</span>
                      ) : (
                        <span className="text-red-500 font-medium">Out of Stock ❌</span> )}
                    </p>
                  </div>
        
                  <div className="flex items-center justify-between mt-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">${price}</h2>
                    <button onClick={handleAddToWishList}
                      className="px-6 py-3 bg-gradient-to-r from-green-400 to-emerald-500 text-white cursor-pointer font-semibold rounded-xl shadow-md hover:shadow-lg hover:scale-102 transition-all duration-300"
                      disabled={!stock}> {stock ? 'Add to Wishlist 🛒' : 'Out of Stock'}
                    </button>
                  </div>

                </div>
           </div>
    </div>
    );
};

export default ProductDetails;