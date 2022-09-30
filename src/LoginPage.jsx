import React from "react";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="flex items-center justify-center m-5 ">
      <div className="flex flex-col p-5 bg-white">
        <h1 className="text-3xl"> Login</h1>
        <div className="flex flex-col p-5 border-2 border-stone-300 gap-y-4">
          <label for="email">
            username or email address
            <span className="text-primary-default">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="border-2 border-stone-300"
          />
          <label for="password">
            password<span className="text-primary-default">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="border-2 border-stone-300"
          />
          <div className="flex items-center">
            <input type="checkbox" id="remember" />
            <label for="remember">Remeber me</label>
          </div>

          <button className="px-2 py-1 text-white rounded bg-primary-default">
            LOG IN
          </button>

          <Link className="text-primary-default" to={"/Forgot/"}>
            Lost your password?
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
