"use client";

export default function HomePage() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center text-white max-w-lg">
        <h1 className="text-4xl font-bold mb-4">Welcome to To-Do Application</h1>
        <p className="text-lg mb-6">
          Stay organized and productive with our easy-to-use task management
          app. Create, edit, and manage your tasks efficiently.
        </p>
        <button
          onClick={() => (window.location.href = "/myTodo")}
          className="bg-white hover:bg-gray-200 text-blue-500 font-semibold py-3 px-6 rounded transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

