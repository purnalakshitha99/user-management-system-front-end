import React from "react";

function Login() {
  return (
   <div className="flex items-center justify-center bg-gray-100 min-h-screen">
    <div className="bg-white shadow rounded-2xl p-8 w-full max-w-md ">
      <h2 className="text-center font-bold text-3xl">UserTrack</h2>
     <form className="space-y-2">
      <label className="block ">
        Email
      </label>
    <input type="email" placeholder="enter the email" className="w-full px-4 py-2 border rounded-lg focus:outline-none mb-2"></input>
    <label className="block text-">
        Password
      </label>
    <input type="password" placeholder="enter the email" className="px-4 py-2 w-full border rounded-lg focus:outline-none"></input>
     </form>
    </div>
   </div>
  );
}

export default Login;
