"use client";
import Head from "next/head";
import Layout from "../Components/Layout";
import { useState, useEffect, useRef } from "react";
import { FaCamera } from "react-icons/fa";

interface UserData {
  username: string;
  email: string;
  profileImage: string;
}

const SettingsPage: React.FC = () => {
  const [user, setUser] = useState<UserData>({
    username: "",
    email: "",
    profileImage: "images/rema.jpg",
  });

  const [passwordValues, setPasswordValues] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [isLoading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setTimeout(() => {
      const fetchedUser: UserData = {
        username: "Nyeliep",
        email: "giel@gmail.com",
        profileImage: "images/rema.jpg",
      };
      setUser(fetchedUser);
      setLoading(false);
    }, 1000);
  }, []);

  const handleProfileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleEditProfilePicture = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleProfileImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const profileImage = event.target.result as string;
          setUser({
            ...user,
            profileImage,
          });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitProfile = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Profile information updated:", user);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPasswordValues({
      ...passwordValues,
      [name]: value,
    });
  };

  const handleSubmitPassword = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log("Password changed:", passwordValues);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>Settings | E-Taka</title>
        </Head>
        <div className="min-h-screen py-8  items-center text-center">
          <div className="container mx-auto">
            <div className="space-y-6">
              <h1 className="text-2xl font-semibold">Account Settings</h1>

              <form onSubmit={handleSubmitProfile}>
                <div className="bg-white px-4 py-4">
                  <h2 className="text-lg font-semibold">Profile Information</h2>

                  <div className="flex justify-center mb-6">
                    <img
                      src={user.profileImage}
                      alt="Profile"
                      className="mt-2 rounded-full h-[150px] w-[150px] object-cover"
                    />

                    <label
                      className=" absolute ml-[100px] mt-[120px] cursor-pointer bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center"
                      htmlFor="profileImage"
                    >
                      <FaCamera />
                    </label>
                  </div>
                  <input
                    type="file"
                    accept="image/*"
                    id="profileImage"
                    name="profileImage"
                    onChange={handleProfileImageChange}
                    ref={fileInputRef}
                    style={{ display: "none" }}
                  />

                  <div className="mb-4">
                    <label
                      htmlFor="username"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Username
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      name="username"
                      onChange={handleProfileChange}
                      value={user.username}
                      placeholder="Username"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="email"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      name="email"
                      onChange={handleProfileChange}
                      value={user.email}
                      placeholder="Email"
                    />
                  </div>

                  <div className="justify-center">
                    <button
                      className="bg-orange-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Save Profile
                    </button>
                  </div>
                </div>
              </form>

              <form onSubmit={handleSubmitPassword}>
                <div className="bg-white px-4 py-4 ">
                  <h2 className="text-lg font-semibold">Change Password</h2>

                  <div className="mb-4 pt-2">
                    <label
                      htmlFor="newPassword"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      New Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="newPassword"
                      type="password"
                      name="newPassword"
                      onChange={handlePasswordChange}
                      value={passwordValues.newPassword}
                      placeholder="New Password"
                    />
                  </div>
                  <div className="mb-4">
                    <label
                      htmlFor="confirmPassword"
                      className="block text-gray-700 text-sm font-bold mb-2"
                    >
                      Confirm New Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-[600px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="confirmPassword"
                      type="password"
                      name="confirmPassword"
                      onChange={handlePasswordChange}
                      value={passwordValues.confirmPassword}
                      placeholder="Confirm New Password"
                    />
                  </div>
                  <div className=" justify-center">
                    <button
                      className="bg-orange-500 hover:bg-green-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline p-4"
                      type="submit"
                    >
                      Change Password
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default SettingsPage;
