import React from "react";

const NotFound: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-indigo-600">404</h1>
        <p className="mt-4 text-xl font-semibold text-gray-800">
          Page Not Found
        </p>
        <p className="mt-2 text-gray-600">
          Sorry, the page you are looking for doesn’t exist or has been moved.
        </p>
        <a
          href="/"
          className="mt-6 inline-block rounded-lg bg-indigo-600 px-6 py-2 text-white shadow hover:bg-indigo-700 transition"
        >
          Go Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;