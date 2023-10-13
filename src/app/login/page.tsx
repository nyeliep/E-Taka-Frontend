"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { LoginUser, loginUsers } from "../utilities/utils";
import { useRouter } from "next/navigation";
import useLogin from "../hooks/useUserLogin";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const Login = () => {
  const router = useRouter();

  const initialFormData: LoginUser = {
    email: "",
    password: "",
  };

  const {
    user,
    errors,
    formData,
    setFormData,
    setErrors,
    cookie,
    handleSubmit,
  } = useLogin(initialFormData);

  const [error, setError] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [LoginSuccess, setLoginSuccess] = useState(false);

  const errorMessages = Object.values(errors);
  const errorMessage = errorMessages.join(" ");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Head>
        <title className="text-black">Login | E-Taka</title>
      </Head>
      <div className="bg-background-paper min-h-screen flex justify-center items-center">
        <div className="w-full sm:w-1/2 px-3 py-20">
          <div className="flex justify-center">
            <div className="mb-3">
              <h4 className="text-4xl">Login</h4>
              <p className="text-secondary text-sm mt-10">
                Don&apos;t have an account?{" "}
                <Link
                  href="/register"
                  passHref
                  className="underline hover:opacity-80 text-green-800 text-sm"
                >
                  Register
                </Link>
              </p>
              <div className="mb-3 mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <input
                      className={`w-full sm:w-[500px] border rounded-md p-2 ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      placeholder="Email"
                      name="email"
                      onBlur={handleInputChange}
                      onChange={handleInputChange}
                      type="email"
                      value={formData.email}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div className="mb-3 relative">
                    <input
                      className={`w-full border rounded-md p-2 ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      placeholder="Password"
                      name="password"
                      onBlur={handleInputChange}
                      onChange={handleInputChange}
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                    />
                    {showPassword ? (
                      <i
                        className="absolute top-2 right-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        <RxEyeOpen />
                      </i>
                    ) : (
                      <i
                        className="absolute top-2 right-3 cursor-pointer"
                        onClick={togglePasswordVisibility}
                      >
                        <RxEyeClosed />
                      </i>
                    )}
                    {errors.password && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  {Object.values(errors).map((errorMessage, index) => (
                    <p
                      key={index}
                      style={{
                        display: "inline-block ",
                        whiteSpace: "normal",
                        marginRight: "3.5px",
                      }}
                      className="text-red-500 "
                    >
                      {errorMessage}
                    </p>
                  ))}
                  {errors.submit && (
                    <p className="text-red-500 text-sm mt-3">{errors.submit}</p>
                  )}
                  <button
                    className="w-full bg-orange-500 text-green-800 py-2 mt-8 rounded-md"
                    type="submit"
                    // disabled={submitting}
                  >
                    Login
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="w-3/5 h-screen bg-orange-200 flex flex-col justify-center items-center">
          <div className="text-center">
            <h1 className="text-2xl">
              <span className="text-orange-500">Welcome</span> to our{" "}
              <span className="text-orange-500">E-Waste</span> Recycling
              Platform
            </h1>
          </div>
          <img src="images/home.png" alt="Home" className="w-5/6 mt-10" />
        </div>
      </div>
    </>
  );
};

export default Login;
