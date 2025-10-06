import React from "react";
import { useRouteError } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Error illustration"
          className="w-80 mb-6"
        />

        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Oops! Something went wrong 😢
        </h1>

        <p className="text-gray-600 mb-4">
          {error?.statusText || error?.message || "Unexpected error occurred."}
        </p>

        <a
          href="/"
          className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
        >
          Go Back Home
        </a>
      </div>
      <Footer></Footer>
    </>
  );
};

export default ErrorPage;
