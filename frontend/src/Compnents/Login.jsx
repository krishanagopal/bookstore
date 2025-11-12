import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  // State to hold form data
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reload
    console.log("Login Data:", formData); // ✅ Log user input to console
  };

  // Navigate to signup
  const handleSignup = () => {
    const modal = document.getElementById("my_modal_3");
    modal.close();
    navigate("/signup");
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-base-100 shadow-2xl rounded-2xl p-6 border border-gray-200">
          {/* Close Button */}
          <form method="dialog">
            <button
              className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3 hover:bg-gray-100"
              aria-label="Close"
            >
              ✕
            </button>
          </form>

          {/* Header */}
          <h3 className="font-extrabold text-2xl text-center mb-2 text-neutral">
            Welcome Back 👋
          </h3>
          <p className="text-sm text-center text-gray-500 mb-6">
            Log in to continue your reading journey
          </p>

          {/* Login Form */}
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
              Log In
            </button>
          </form>

          {/* Divider */}
          <div className="divider text-sm text-gray-400 my-5">OR</div>

          {/* Footer */}
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-2">
              New to BookStore?
              <button
                onClick={handleSignup}
                className="text-neutral font-semibold cursor-pointer hover:underline ml-1 bg-transparent border-none"
              >
                Sign Up
              </button>
            </p>

            <div
              className="mt-2 bg-gradient-to-r from-neutral to-gray-700 text-neutral-content rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer"
              onClick={handleSignup}
            >
              <p className="text-sm font-medium">
                ✨ Create your free account and unlock <br />
                100+ e-books instantly!
              </p>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Login;



