import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
const ProgressPage = () => {
  return <PageLayout>
      <h1 className="text-3xl font-bold mb-6">Your Progress</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Course Completion</h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium text-gray-600">Introduction to React</span>
                <span className="text-sm font-medium">75%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: "75%"
              }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">Advanced JavaScript</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: "45%"
              }}></div>
              </div>
            </div>
            
            <div>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">TypeScript Essentials</span>
                <span className="text-sm font-medium">20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{
                width: "20%"
              }}></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Weekly Activity</h2>
          <div className="h-60 flex items-end space-x-2">
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-blue-200 w-full" style={{
              height: "30%"
            }}></div>
              <span className="text-xs mt-1">Mon</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-blue-400 w-full" style={{
              height: "60%"
            }}></div>
              <span className="text-xs mt-1">Tue</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-blue-600 w-full" style={{
              height: "90%"
            }}></div>
              <span className="text-xs mt-1">Wed</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-blue-400 w-full" style={{
              height: "70%"
            }}></div>
              <span className="text-xs mt-1">Thu</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-blue-300 w-full" style={{
              height: "40%"
            }}></div>
              <span className="text-xs mt-1">Fri</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-blue-200 w-full" style={{
              height: "20%"
            }}></div>
              <span className="text-xs mt-1">Sat</span>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <div className="bg-blue-100 w-full" style={{
              height: "10%"
            }}></div>
              <span className="text-xs mt-1">Sun</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          <div className="flex items-start pb-4 border-b">
            <div className="bg-green-100 p-2 rounded-full mr-4">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Completed Lesson: React Hooks Introduction</h3>
              <p className="text-sm text-gray-600">2 hours ago</p>
            </div>
          </div>
          
          <div className="flex items-start pb-4 border-b">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Watched Video: Understanding Closures</h3>
              <p className="text-sm text-gray-600">Yesterday</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <div className="bg-purple-100 p-2 rounded-full mr-4">
              <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Submitted Quiz: JavaScript Fundamentals</h3>
              <p className="text-sm text-gray-600">2 days ago</p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>;
};
export default ProgressPage;