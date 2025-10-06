import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-gray-800 py-10 mt-10 shadow-inner">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
            
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-bold text-purple-700 mb-3">Room<span className="text-pink-500">Décor</span></h2>
            <p className="text-sm text-gray-600 leading-relaxed"> Transform your space into a cozy haven 🌸 Discover unique furniture, modern lighting, and aesthetic décor to match your vibe.</p>
          </div>

          {/* Links Section */}
          <div>
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Explore</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <a className="hover:text-pink-500 transition">Home</a>
              </li>
              <li>
                <a className="hover:text-pink-500 transition">Collections</a>
              </li>
              <li>
                <a className="hover:text-pink-500 transition">About Us</a>
              </li>
              <li>
                <a className="hover:text-pink-500 transition">Contact</a>
              </li>
            </ul>
          </div>

          {/* Newsletter / Social Section */}
          <div>
            <h3 className="text-lg font-semibold text-purple-700 mb-3">Stay Connected</h3>
            <p className="text-sm text-gray-600 mb-3"> Subscribe for exclusive décor tips and early access to new drops 🌿</p>

            <div className="flex items-center gap-2 mb-4">
              <input type="text" placeholder="Enter your email" className="input input-bordered w-full max-w-xs rounded-xl bg-white/70 backdrop-blur-md focus:outline-none"/>
              <button className="btn bg-gradient-to-r from-pink-400 to-purple-500 text-white border-none hover:scale-105 transition-transform">Subscribe</button>
            </div>

            <div className="flex gap-4 text-xl text-purple-600">
              <a className="hover:text-pink-500 transition">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a className="hover:text-pink-500 transition">
                <i className="fa-brands fa-pinterest"></i>
              </a>
              <a className="hover:text-pink-500 transition">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a className="hover:text-pink-500 transition">
                <i className="fa-brands fa-tiktok"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="mt-10 text-center border-t border-white/40 pt-4 text-sm text-gray-700">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-purple-600">RoomDécor</span>. All
          rights reserved ✨
        </div>
      </footer>
    </div>
  );
};

export default Footer;
