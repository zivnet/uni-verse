import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
const ForumPage = () => {
  return <PageLayout>
      <h1 className="text-3xl font-bold mb-6">Forum</h1>
      
      <div className="flex justify-between mb-6">
        <div className="relative">
          <input type="text" placeholder="Search discussions..." className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-64" />
          <svg className="w-5 h-5 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          New Discussion
        </button>
      </div>
      
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="border-b p-4 hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium text-gray-800">How to structure React components?</h3>
            <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">Resolved</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">I'm wondering what's the best practice for structuring React components in a large application...</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <span className="mr-4">Posted by: Alex</span>
              <span>2 days ago</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">12 replies</span>
              <span>324 views</span>
            </div>
          </div>
        </div>
        
        <div className="border-b p-4 hover:bg-gray-50 transition-colors">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-lg font-medium">TypeScript type inference not working</h3>
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Open</span>
          </div>
          <p className="text-gray-600 text-sm mb-3">I'm having issues with TypeScript not correctly inferring types from my API responses...</p>
          <div className="flex justify-between items-center text-sm text-gray-500">
            <div className="flex items-center">
              <span className="mr-4">Posted by: Sarah</span>
              <span>1 day ago</span>
            </div>
            <div className="flex items-center">
              <span className="mr-4">8 replies</span>
              <span>156 views</span>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>;
};
export default ForumPage;