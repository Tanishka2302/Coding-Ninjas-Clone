import { useState } from "react";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="relative">
      
      {/* NAVBAR */}
      <div className="flex justify-between items-center px-8 py-4 shadow-md sticky top-0 bg-white z-50">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold text-orange-500 cursor-pointer">
          Coding Ninjas
        </h1>

        {/* Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-medium">
          
          {/* Dropdown */}
          <div
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
            className="relative cursor-pointer"
          >
            <p className="hover:text-orange-500">
              For working professionals ⌄
            </p>

            {showDropdown && (
              <div className="absolute top-8 left-0 bg-white shadow-lg rounded-lg p-6 w-[500px] z-50">
                <h2 className="font-bold mb-4">Domains</h2>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <p onClick={() => alert("Data Analytics selected")} className="hover:text-orange-500 cursor-pointer">Data Analytics</p>
                  <p onClick={() => alert("Software Development selected")} className="hover:text-orange-500 cursor-pointer">Software Development</p>
                  <p onClick={() => alert("Generative AI selected")} className="hover:text-orange-500 cursor-pointer">Generative AI</p>
                  <p onClick={() => alert("Data Science selected")} className="hover:text-orange-500 cursor-pointer">Data Science</p>
                </div>
              </div>
            )}
          </div>

          <p className="cursor-pointer hover:text-orange-500">Practice</p>
          <p className="cursor-pointer hover:text-orange-500">Events</p>
          <p className="cursor-pointer hover:text-orange-500">Community</p>
        </div>

        {/* Login Button */}
        <button
          onClick={() => setShowLogin(true)}
          className="bg-orange-500 text-white px-5 py-2 rounded-lg"
        >
          Login
        </button>
      </div>

      {/* ✅ LOGIN POPUP (INSIDE RETURN) */}
      {showLogin && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-80">
            
            <h2 className="text-xl font-bold mb-4">Login</h2>

            <input
              type="text"
              placeholder="Email"
              className="w-full border p-2 mb-3 rounded"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full border p-2 mb-3 rounded"
            />

            <button
              onClick={() => {
                alert("Logged in (fake 😄)");
                setShowLogin(false);
              }}
              className="w-full bg-orange-500 text-white py-2 rounded"
            >
              Submit
            </button>

            <button
              onClick={() => setShowLogin(false)}
              className="mt-2 text-sm text-gray-500"
            >
              Close
            </button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;