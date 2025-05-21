
import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PageLayout } from "@/components/layout/PageLayout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center py-12">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you're looking for doesn't exist.
        </p>
        <a href="/" className="text-blue-600 hover:text-blue-800 underline">
          Return to Dashboard
        </a>
      </div>
    </PageLayout>
  );
};

export default NotFound;
