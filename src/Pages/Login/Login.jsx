import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router";
import { FcGoogle } from "react-icons/fc";
import authImage from "../../assets/assets/authImage.png";
import ZapShiftLogo from "../Shared/ZapShiftLogo";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    // Handle login logic here
  };

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8 lg:left-12">
          <Link to="/">
            <ZapShiftLogo className=""></ZapShiftLogo>
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full mt-10">
          <h2 className="text-4xl font-bold text-black mb-2">Welcome Back</h2>
          <p className="text-gray-500 mb-8">Login with ZapShift</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            {/* Email Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Email
                </span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className={`input input-bordered w-full bg-white border-gray-200 focus:border-[#B6F01E] focus:outline-none ${
                  errors.email ? "input-error" : ""
                }`}
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <span className="text-error text-sm mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-black">
                  Password
                </span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className={`input input-bordered w-full bg-white border-gray-200 focus:border-[#B6F01E] focus:outline-none ${
                  errors.password ? "input-error" : ""
                }`}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
              {errors.password && (
                <span className="text-error text-sm mt-1">
                  {errors.password.message}
                </span>
              )}
              <div className="text-right mt-1">
                <a href="#" className="text-gray-500 text-sm hover:underline">
                  Forget Password?
                </a>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn w-full bg-[#B6F01E] hover:bg-[#a3d61b] text-black border-none rounded-lg font-bold text-lg normal-case"
            >
              Login
            </button>
          </form>

          {/* Register Link */}
          <p className="mt-4 text-center text-gray-500">
            Don't have any account?{" "}
            <Link
              to="/register"
              className="text-[#8CB500] font-semibold hover:underline"
            >
              Register
            </Link>
          </p>

          {/* Divider */}
          <div className="divider my-6 text-gray-400">Or</div>

          {/* Google Login */}
          <button className="btn w-full btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-black font-semibold rounded-lg normal-case flex items-center gap-2">
            <FcGoogle className="text-xl" />
            Login with google
          </button>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-[#F8FDF5] items-center justify-center relative overflow-hidden">
        <div className="w-full max-w-lg p-10">
          {/* The screenshot shows a blob background or something similar behind the image, 
                 but the image itself might contain it. Let's assume the authImage has it. 
                 If not, we can add a decorative blob. */}
          <img
            src={authImage}
            alt="Login Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
