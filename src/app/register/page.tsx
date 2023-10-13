"use client";
import Head from "next/head";
import Link from "next/link";
import { UserData } from "../utilities/utils";
import { useState } from "react";
import useRegister from "../hooks/useRegistration";
import { useRouter } from "next/navigation";
import { RxEyeClosed, RxEyeOpen } from "react-icons/rx";

const Register = () => {
  const router = useRouter();

  const initialFormData: UserData = {
    name: "",
    username: "",
    phone_number: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const { user, errors, formData, setFormData, setErrors, handleSubmit } =
    useRegister(initialFormData);

  const [error, setError] = useState<{ [key: string]: string }>({});
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
        <title>Register | E-TAKA</title>
      </Head>
      <div className="bg-background-paper min-h-screen flex justify-center items-center">
        <div className="w-1/2 px-3 py-20">
          <div className="flex justify-center">
            <div className="mb-3">
              <h4 className="text-4xl">Register</h4>
              <p className="text-secondary text-sm mt-10 pb-6">
                Already have an account?{" "}
                <Link
                  href="/login"
                  className="underline hover:opacity-80 text-secondary text-sm text-orange-500"
                >
                  Log in
                </Link>
              </p>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    className={`w-full sm:w-[500px] border rounded-md p-2 ${
                      errors.name ? "border-red-500" : ""
                    }`}
                    placeholder="Name"
                    name="name"
                    onBlur={handleInputChange}
                    onChange={handleInputChange}
                    type="text"
                    value={formData.name}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
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
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    className={`w-full sm:w-[500px] border rounded-md p-2 ${
                      errors.username ? "border-red-500" : ""
                    }`}
                    placeholder="Username"
                    name="username"
                    onBlur={handleInputChange}
                    onChange={handleInputChange}
                    type="text"
                    value={formData.username}
                  />
                  {errors.username && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.username}
                    </p>
                  )}
                </div>
                <div className="mb-3">
                  <input
                    className={`w-full sm:w-[500px] border rounded-md p-2 ${
                      errors.phone_number ? "border-red-500" : ""
                    }`}
                    placeholder="Phone Number"
                    name="phone_number"
                    onBlur={handleInputChange}
                    onChange={handleInputChange}
                    type="text"
                    value={formData.phone_number}
                  />
                  {errors.phone_number && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.phone_number}
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
                <div className="mb-3 relative">
                  <input
                    className={`w-full border rounded-md p-2 ${
                      errors.confirm_password ? "border-red-500" : ""
                    }`}
                    placeholder="Confirm Password"
                    name="confirm_password"
                    onBlur={handleInputChange}
                    onChange={handleInputChange}
                    type={showPassword ? "text" : "password"}
                    value={formData.confirm_password}
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
                  {errors.confirm_password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.confirm_password}
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
                  className="w-full bg-green-800 text-orange-500 py-2 mt-8 rounded-md"
                  type="submit"
                >
                  Register
                </button>
              </form>
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

export default Register;
