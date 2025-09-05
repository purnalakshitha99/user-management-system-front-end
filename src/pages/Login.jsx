import React from "react";

function Login() {
  return (
   <div className="flex items-center justify-center bg-gray-100 min-h-screen">
    <div className="bg-white shadow rounded-2xl p-8 w-full max-w-md ">
      <h2 className="text-center font-bold">welcome back</h2>
     <form className="space-y-2">
      <label className="block text-">
        Email
      </label>
    <input type="email" placeholder="enter the email" className="w-full border rounded-sm focus:outline-none"></input>
     </form>
    </div>
   </div>
  );
}

export default Login;
