import React from "react";
import banner from "../assets/banner.jpg";

function Banner() {
  return (
    <section className="w-full bg-base-100 text-base-content transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Welcome to <span className="text-primary">Bookstore</span>
          </h1>
          <p className="text-lg text-base-content/70 max-w-md mx-auto md:mx-0 mb-6">
            Discover a world of knowledge, adventure, and imagination with our
            curated collection of books for every reader.
          </p>

          {/* Email Input Field */}
          <div className="flex flex-col items-start w-full max-w-md mx-auto md:mx-0 gap-4">
            <input
              type="email"
              placeholder="Enter your email to login"
              className="input input-bordered w-full"
            />
            <button className="btn btn-neutral">Login</button>
          </div>
        </div>

        {/* Right Section (Image or Illustration) */}
        <div className="flex-1 flex justify-center md:justify-end">
          <img
            src={banner}
            alt="Bookstore illustration"
            className="w-full max-w-[480px] md:max-w-[550px] lg:max-w-[600px] rounded-xl shadow-lg object-cover aspect-[5/3]"
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;





