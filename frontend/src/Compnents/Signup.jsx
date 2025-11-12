import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

function Signup() {
  const navigate = useNavigate();

  // 🔹 State for form fields
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // 🔹 Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 🔹 Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("📝 Signup Data:", formData);

    // Optionally navigate or handle further logic here
    // Example: navigate("/welcome");
  };

  const handleLogin = () => {
    const modal = document.getElementById("sign");
    if (modal) modal.close();
    navigate("/login");
  };

  return (
    <div
      id="sign"
      className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-sm z-50"
    >
      <div
        className="relative w-full max-w-md bg-base-100 shadow-2xl rounded-2xl p-8 border border-gray-200 
        transform transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:scale-[1.02]"
      >
        {/* Close Button */}
        <form method="">
          <Link
            to="/"
            className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 hover:bg-gray-100"
          >
            ✕
          </Link>
        </form>

        {/* Header */}
        <h3 className="font-extrabold text-2xl text-center mb-2 text-neutral">
          Create Account ✨
        </h3>
        <p className="text-sm text-center text-gray-500 mb-6">
          Join us and explore 100+ e-books instantly
        </p>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral focus:border-transparent transition-all duration-200"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral focus:border-transparent transition-all duration-200"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="input input-bordered w-full rounded-xl focus:outline-none focus:ring-2 focus:ring-neutral focus:border-transparent transition-all duration-200"
            required
          />

          <button
            type="submit"
            className="btn btn-neutral w-full mt-2 rounded-xl font-semibold tracking-wide hover:scale-[1.02] transition-transform"
          >
            Sign Up
          </button>
        </form>

        {/* Divider */}
        <div className="divider text-sm text-gray-400 my-5">OR</div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-gray-600 mb-2">
            Already have an account?{" "}
            <button
              onClick={() => document.getElementById("my_modal_3").showModal()}
              className="text-neutral font-semibold cursor-pointer hover:underline ml-1 bg-transparent border-none"
            >
              Log In
            </button>
            <Login />
          </p>

          <div
            className="mt-2 bg-gradient-to-r from-neutral to-gray-700 text-neutral-content rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
            onClick={handleLogin}
          >
            <p className="text-sm font-medium">
              👋 Log in now and continue your <br />
              reading adventure!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;

