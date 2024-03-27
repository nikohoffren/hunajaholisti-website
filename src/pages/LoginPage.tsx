// LoginPage.js
import React from 'react';

function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="absolute top-0 left-0 p-4">
        {/* Replace 'YourLogo' with your actual logo */}
        <img  src="HHlogo.jpg" alt="YourLogo" className="h-12 w-12" />
      </div> 
      <div className="backdrop-blur bg-white bg-opacity-5 p-8 shadow-md rounded-lg  text-white">
        <h1 className="text-2xl mb-20 mt-10 ">Login Page</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1">Email</label>
            <input type="email" id="email" name="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1">Password</label>
            <input type="password" id="password" name="password" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div>
          <a href="#" className="text-blue-500 hover:underline mt-10">Forgot Password?</a>
          </div>
          <div className="flex justify-between items-center">
            <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button> 
          </div>
          <div className="flex justify-between items-center">
              <a href="#" className="text-blue-500 hover:underline">Register</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
