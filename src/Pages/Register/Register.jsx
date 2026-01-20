import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import authImage from "../../assets/assets/authImage.png";
import ZapShiftLogo from "../Shared/ZapShiftLogo";
import imageUploadIcon from "../../assets/assets/image-upload-icon.png"; // Assuming this is the asset
import useAuth from "../../hooks/useAuth";

const Register = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [preview, setPreview] = useState(null);
  const { createUser } = useAuth();
  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then(() => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="flex min-h-screen bg-white text-black">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 relative">
        {/* Logo */}
        <div className="absolute top-8 left-8 lg:left-12">
          <Link to="/">
            <ZapShiftLogo className=""></ZapShiftLogo>
          </Link>
        </div>

        <div className="max-w-md mx-auto w-full mt-10">
          <h2 className="text-4xl font-bold text-black mb-2">
            Create an Account
          </h2>
          <p className="text-gray-500 mb-6">Register with ZapShift</p>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Image Upload */}
            <div className="flex justify-start mb-2">
              <div className="relative">
                <label htmlFor="image-upload" className="cursor-pointer">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden border border-gray-200 hover:border-[#B6F01E] transition-colors">
                    {preview ? (
                      <img
                        src={preview}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={imageUploadIcon}
                        alt="Upload"
                        className="w-8 h-8 opacity-50"
                      />
                    )}
                  </div>
                  {/* Small upload indicator if needed, but the icon inside might be enough. 
                             The screenshot shows a small green arrow at the bottom right of the circle.
                             Let's try to mimic that or just stick to the icon.
                         */}
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  {...register("image", { onChange: handleImageChange })}
                />
              </div>
            </div>

            {/* Name Field */}
            <div className="form-control">
              <label className="label py-1">
                <span className="label-text font-semibold text-black">
                  Name
                </span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className={`input input-bordered w-full bg-white border-gray-200 focus:border-[#B6F01E] focus:outline-none ${
                  errors.name ? "input-error" : ""
                }`}
                {...register("name", {
                  required: "Name is required",
                })}
              />
              {errors.name && (
                <span className="text-error text-sm mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-control">
              <label className="label py-1">
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
              <label className="label py-1">
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
            </div>

            {/* Register Button */}
            <button
              type="submit"
              className="btn w-full bg-[#B6F01E] hover:bg-[#a3d61b] text-black border-none rounded-lg font-bold text-lg normal-case mt-4"
            >
              Register
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-4 text-center text-gray-500">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#8CB500] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>

          {/* Divider */}
          <div className="divider my-4 text-gray-400">Or</div>

          {/* Google Register */}
          <button className="btn w-full btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 text-black font-semibold rounded-lg normal-case flex items-center gap-2">
            <FcGoogle className="text-xl" />
            Register with google
          </button>
        </div>
      </div>

      {/* Right Side - Illustration */}
      <div className="hidden lg:flex w-1/2 bg-[#F8FDF5] items-center justify-center relative overflow-hidden">
        <div className="w-full max-w-lg p-10">
          <img
            src={authImage}
            alt="Register Illustration"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
