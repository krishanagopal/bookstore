import React from "react";

function Cards({ item }) {
  return (
    <div
      className="card bg-base-100 w-80 sm:w-96 rounded-2xl overflow-hidden 
                 shadow-md hover:shadow-2xl hover:shadow-cyan-300/40 
                 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Image Section */}
      <figure className="relative h-64 w-full overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
        />

        {/* Floating badge */}
        <div
          className="absolute top-3 right-3 bg-emerald-500 text-white 
                     text-xs px-3 py-1 rounded-full shadow-md cursor-pointer 
                     hover:bg-emerald-600 transition-colors duration-300"
        >
          Buy Now
        </div>
      </figure>

      {/* Content */}
      <div className="card-body p-5 bg-base-100 transition-colors duration-300 hover:bg-base-200">
        <h2 className="card-title text-lg font-semibold text-white line-clamp-2">
          {item.title}
        </h2>

        <p className="text-white text-sm mt-2 mb-4 line-clamp-3">
          {item.description}
        </p>

        {/* Actions */}
        <div className="card-actions justify-between items-center">
          <div
            className="badge badge-outline border-cyan-400 text-cyan-600 
                       px-4 py-2 text-sm font-semibold rounded-full 
                       cursor-default hover:border-cyan-600 hover:text-cyan-700
                       transition-all duration-300"
          >
            {item.name}
          </div>

          <div
            className="badge bg-cyan-500 text-white px-4 py-2 text-sm 
                       font-semibold rounded-full cursor-pointer 
                       hover:bg-cyan-600 hover:scale-105 transition-all duration-300"
          >
            Free
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;

