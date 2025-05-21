import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
const CoursesPage = () => {
  return <PageLayout>
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course cards would go here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Introduction to React</h2>
          <p className="text-gray-600 mb-4">Learn the fundamentals of React and build your first application.</p>
          <div className="flex justify-between items-center">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">8 weeks</span>
            <button className="text-blue-600 hover:text-blue-800">View Details</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">Advanced JavaScript</h2>
          <p className="text-gray-600 mb-4">Master advanced JavaScript concepts and patterns.</p>
          <div className="flex justify-between items-center">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">6 weeks</span>
            <button className="text-blue-600 hover:text-blue-800">View Details</button>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800">TypeScript Essentials</h2>
          <p className="text-gray-600 mb-4">Learn how to leverage TypeScript in your projects.</p>
          <div className="flex justify-between items-center">
            <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded-full">5 weeks</span>
            <button className="text-blue-600 hover:text-blue-800">View Details</button>
          </div>
        </div>
      </div>
    </PageLayout>;
};
export default CoursesPage;