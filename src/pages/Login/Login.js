import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useLoginMutation } from "../../features/auth/authApi";
import { getLoginData } from "../../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const [loginUser, { data }] = useLoginMutation();
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    loginUser(data);
    reset();
  };

  if (data?.status) {
    dispatch(getLoginData(data?.data));
    localStorage.setItem("accessToken", data?.data?.token);
    console.log(data);
    console.log(state);
    console.log(data?.data?.token);
  }

  return (
    <div className="container mx-auto text-[#333333]">
      <div className="lg:max-w-1/2 lg:w-1/2 mx-auto px-5">
        <h2 className="text-center text-3xl my-8 font-semibold">
          Welcome to Task Job
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <label className="font-semibold" htmlFor="email">
              Email Address*
            </label>
            <input
              className="border border-[#333333] text-[#333333] rounded-md px-3 py-2 w-full outline-none mt-2"
              type="email"
              placeholder="Enter your Email"
              {...register("email")}
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
              {...register("password")}
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
        <p></p>
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
