
import React from 'react'

import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

function Course() {
  const[books,setBooks]=useState([])
  useEffect(()=>{
   const getBooks=async()=>{
    try {
     
    const res = await axios.get("http://localhost:4001/books");
    setBooks(res.data);
     console.log(res.data);
    } catch (error) {
      console.log("Error while fetching books",error)
    }
    }
    getBooks();
  },[])
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-16 text-center">
        {/* Intro Section */}
        <div className="flex flex-col items-center justify-center space-y-8 mb-12">
          <h1 className="font-extrabold text-4xl md:text-5xl leading-snug text-gray-100 drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
            We are delighted to have you
            <span className="text-pink-600 drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]">
              {" "}on our courses :)
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
            This course guides learners through developing a paid book, covering{" "}
            <span className="text-pink-600 font-semibold drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]">
              planning
            </span>,{" "}
            <span className="text-blue-600 font-semibold drop-shadow-[0_0_10px_rgba(59,130,246,0.7)]">
              content creation
            </span>,{" "}
            <span className="text-violet-600 font-semibold drop-shadow-[0_0_10px_rgba(139,92,246,0.7)]">
              design
            </span>,{" "}
            <span className="text-indigo-400 font-semibold drop-shadow-[0_0_10px_rgba(129,140,248,0.7)]">
              publishing
            </span>, and{" "}
            <span className="text-pink-600 font-semibold drop-shadow-[0_0_10px_rgba(236,72,153,0.7)]">
              marketing strategies
            </span>{" "}
            to successfully launch and sell books online.
          </p>
            <Link to="/">
            <button className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_25px_rgba(236,72,153,0.8)] cursor-pointer">
            Back
          </button>
            </Link>
          
        </div>

        {/* Course Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 place-items-center">
          {books.map((item) => (
            <div
              key={item.id}
              className="group relative  cursor-pointer w-90 bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-2xl shadow-lg hover:shadow-[0_0_25px_rgba(236,72,153,0.5)] overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:scale-105"
            >
              {/* Glow Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-r from-pink-500/20 to-purple-600/20 blur-2xl"></div>

              {/* Image */}
              <figure className="relative overflow-hidden cursor-pointer">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </figure>

              {/* Content */}
              <div className="relative p-5 z-10">
                <h2 className="text-xl font-bold mb-2 group-hover:text-pink-400 transition-all duration-300">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                  {item.description}
                </p>
                <div className="card-actions justify-center">
                  <button className="px-5 py-2 bg-pink-600 rounded-full text-white font-semibold shadow-md hover:bg-pink-700 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition-all duration-300 cursor-pointer">
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Course
