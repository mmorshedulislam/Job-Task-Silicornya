import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-1/2 w-1/2 mx-auto">
        <h2 className="text-center text-3xl my-8 font-semibold">
          Welcome to Task Job
        </h2>
        <form>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Email Address*
            </label>
            <input
              className="border border-black rounded-md px-3 py-2 w-full outline-none"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Password
            </label>
            <input
              className="border border-black rounded-md px-3 py-2 w-full outline-none"
              type="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="my-5">
            <input
              className="border bg-[#6078EA] text-white w-full py-3 rounded-md font-semibold"
              type="submit"
              value="Log In"
            />
          </div>
        </form>
        <p className="font-semibold text-center">
          Don't Have An Account?{" "}
          <Link
            to={"/register"}
            className="font-semibold text-[#6078EA] underline"
          >
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
