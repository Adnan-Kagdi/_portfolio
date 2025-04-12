const Dashboard = () => {
    return (
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4 hidden md:block">
          <h2 className="text-lg font-semibold">Dashboard</h2>
          <ul className="mt-4">
            <li className="p-2 hover:bg-gray-700 rounded">Home</li>
            <li className="p-2 hover:bg-gray-700 rounded">Profile</li>
            <li className="p-2 hover:bg-gray-700 rounded">Settings</li>
          </ul>
        </div>
  
        {/* Main Content */}
        <div className="flex-1 p-6">
          <h1 className="text-2xl font-bold">Welcome to Dashboard</h1>
          <p className="mt-2 text-gray-600">
            This is the main content area. It remains in place but adapts to different screen sizes.
          </p>
  
          {/* Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Card 1</h3>
              <p>Some content here...</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Card 2</h3>
              <p>Some content here...</p>
            </div>
            <div className="bg-white shadow-md p-4 rounded-lg">
              <h3 className="text-lg font-semibold">Card 3</h3>
              <p>Some content here...</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Dashboard;
  