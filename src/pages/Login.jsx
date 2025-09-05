import React from "react";

function Login() {
  return (
    <div className="flex items-center justify-center bg-gray-100 min-h-screen">
      <div className="bg-white shadow rounded-2xl p-8 w-full max-w-md ">
        <h2 className="text-center font-bold text-3xl">UserTrack</h2>
        <form className="space-y-2">
          <div>
          <label className="block text-gray-600 text-[16px] mb-1 ">
            Email
          </label>
          <input type="email" placeholder="enter the email" className="w-full px-4 py-2 border border-gray-300 rounded-lg  mb-5 focus:ring-2 focus:outline-none focus:ring-blue-500"></input>
          </div>
          <div>
          <label className="block text-gray-600 text-[16px] mb-1">
            Password
          </label>
          <input type="password" placeholder="enter the email" className="px-4 py-2 w-full border border-gray-300 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-500"></input>
          </div>
          <div>
            <button type="submit" className="w-full bg-blue-500 text-white rounded-lg py-2 mt-2 font-semibold" >Login</button>
          </div>
          <p className="text-center text-sm">Don't have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a> </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
