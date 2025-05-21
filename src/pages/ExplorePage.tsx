
import React from "react";

const ExplorePage = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Explore</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Trending Courses</h2>
          <p className="mb-4 opacity-90">Discover the most popular courses this month.</p>
          <button className="bg-white text-blue-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            View All
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Live Events</h2>
          <p className="mb-4 opacity-90">Join webinars and workshops hosted by experts.</p>
          <button className="bg-white text-purple-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            Browse Events
          </button>
        </div>
        
        <div className="bg-gradient-to-r from-green-600 to-green-800 text-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2">Learning Paths</h2>
          <p className="mb-4 opacity-90">Follow curated courses to master a specific skill.</p>
          <button className="bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-100 transition-colors">
            Explore Paths
          </button>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Recommended For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <img src="https://via.placeholder.com/400x200" alt="Course thumbnail" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">Data Visualization with D3.js</h3>
            <p className="text-gray-600 mb-4">Learn to create interactive data visualizations for the web.</p>
            <div className="flex justify-between items-center">
              <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full">Intermediate</span>
              <button className="text-blue-600 hover:text-blue-800">View Course</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
