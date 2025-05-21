import React from "react";
import { PageLayout } from "@/components/layout/PageLayout";
const NovaPage = () => {
  return <PageLayout>
      <h1 className="text-3xl font-bold mb-6">Nova AI Learning Assistant</h1>
      
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <div className="flex items-start mb-6">
          <div className="bg-blue-600 text-white p-3 rounded-full mr-4">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-800">Nova</h2>
            <p className="text-gray-600">
              Hi there! I'm Nova, your AI learning assistant. How can I help you today? 
              You can ask me questions about your courses, help you practice concepts, 
              or assist with your learning journey.
            </p>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex mb-4">
            <div className="bg-gray-100 rounded-lg p-3 max-w-3xl">
              <p className="text-gray-600">What's the difference between props and state in React?</p>
            </div>
          </div>
          
          <div className="flex justify-end mb-4">
            <div className="bg-blue-100 rounded-lg p-3 max-w-3xl">
              <p className="text-gray-600">
                <strong>Props vs State in React:</strong><br />
                Props (short for "properties") are passed from parent components to child components. 
                They are immutable within the child component and are used to configure a component.<br /><br />
                
                State represents data that can change over time. It's managed within a component and 
                can be updated using setState(). When state changes, the component re-renders.<br /><br />
                
                Key differences:
                <ul className="list-disc pl-5 mt-2">
                  <li>Props are passed down from parents; state is managed internally</li>
                  <li>Props are immutable; state is mutable</li>
                  <li>Props configure a component; state tracks changing data</li>
                </ul>
                
                Would you like me to provide a code example?
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="relative">
            <input type="text" placeholder="Ask Nova anything..." className="w-full border rounded-lg p-3 pr-12 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <button className="absolute right-2 top-2 bg-blue-600 text-white p-1 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">Suggested Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <button className="bg-white p-3 rounded-lg shadow hover:shadow-md transition-shadow text-gray-800 text-center">
          Explain closures in JavaScript
        </button>
        <button className="bg-white p-3 rounded-lg shadow text-left hover:shadow-md transition-shadow">
          How does React's virtual DOM work?
        </button>
        <button className="bg-white p-3 rounded-lg shadow text-left hover:shadow-md transition-shadow">
          What are TypeScript generics?
        </button>
      </div>
    </PageLayout>;
};
export default NovaPage;