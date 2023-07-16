import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container mx-auto text-[#333333]">
      <div className="lg:max-w-1/2 lg:w-1/2 mx-auto px-5">
        <h2 className="text-center text-3xl my-8 font-semibold">
          Welcome to Task Job
        </h2>
        <form>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Email Address*
            </label>
            <input
              className="border border-[#333333] text-[#333333] rounded-md px-3 py-2 w-full outline-none mt-2"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Password*
            </label>
            <input
              className="border border-[#333333] text-[#333333] rounded-md px-3 py-2 w-full outline-none mt-2"
              type="password"
              placeholder="Enter Password"
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
        <p className="font-semibold text-center text-[#000000]">
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
