import React from "react";

function PriceCard({ price }) {
  return (
    <div className="bg-gray-800 text-white p-8 rounded-3xl shadow-lg flex flex-col justify-between w-96 border-2 border-white">
      <div>
        <div className="flex gap-20 items-center mb-6">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-2 rounded-full">
            {/* Need to work in thhis SVG */}
            <svg
              className="w-6 h-6 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.5 0-3 1-3 3v3.5a1.5 1.5 0 001.5 1.5h1.75m-1.25-5.5H12m1-5.5l.41 1.225a3 3 0 002.92 1.775h1.78M15.41 5.5L12 12m0 0l-1 4m1-4v5m4 0a3 3 0 11-4-3"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-light">{price.plan}</h1>
        </div>

        <h3 className="text-4xl font-light mb-6 text-center">${price.amt}</h3>

        <ul className="space-y-3 text-sm">
          {price.services.map((service, index) => (
            <li key={index} className="flex items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mt-1 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <polygon points="0,5 10,10 0,15" fill="white" />
              </svg>
              <span className="ml-2 text-white">{service}</span>
            </li>
          ))}
        </ul>
      </div>

      <button className="w-full mt-6 py-3 text-3xl font-light text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-pink-500 hover:to-purple-500 transition duration-300 ease-in-out">
        Choose Pricing
      </button>
    </div>
  );
}

export default PriceCard;
