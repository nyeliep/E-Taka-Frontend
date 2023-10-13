import React, { useState } from "react";
import Link from "next/link";
import { RxChevronLeft, RxChevronRight, RxPerson } from "react-icons/rx";
import { FaTasks, FaWallet, FaHome, FaUserCog } from "react-icons/fa";
import { FiSettings } from "react-icons/fi";
const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("Collection");
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  const sidebarBgClass = "bg-green-800";
  return (
    <div className="flex">
      <div
        className={`flex ${
          isSidebarOpen ? "w-64" : "w-32"
        } h-screen p-4 border-r-[1px] flex flex-col justify-between ${sidebarBgClass}`}
      >
        <div className="flex flex-col items-center">
          <button
            className={`text-2xl text-black p-2 bg-orange-500  rounded-full  ${
              isSidebarOpen ? "ml-60" : "ml-28"
            }`}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <RxChevronLeft /> : <RxChevronRight />}
          </button>
          <Link href="/">
            <div className="p-1 inline-block mb-4 ml-1">
              <img
                src="images/logo.png"
                className={`${isSidebarOpen ? "w-full" : "w-10 h-10"}`}
                alt="Logo"
              />
            </div>
          </Link>
          <div className="flex flex-col items-center">
            <Link href="/dashboard">
              <div>
                <h1
                  className={`p-3 text-3xl ${
                    activeLink === "Collection"
                      ? "text-orange-500"
                      : "text-green-"
                  }`}
                  onClick={() => handleLinkClick("Dashboard")}
                >
                  {isSidebarOpen && "Collection"}
                </h1>
              </div>
            </Link>
            <Link href="/e-commerce" className="text-white">
              <div>
                <h1
                  className={`p-3 text-2xl ${
                    activeLink === "E-commerce" ? "text-white" : "text-green-"
                  }`}
                  onClick={() => handleLinkClick("E-commerce")}
                >
                  {isSidebarOpen && "E-commerce"}
                </h1>
              </div>
            </Link>
          </div>
          <span className="border-b-[1px] border-orange-500 w-full p-2"></span>
          <div className="h-96 mt-8">
            {activeLink === "Collection" && (
              <>
                <Link href="/dashboard">
                  <div className="flex">
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block">
                      <FaHome size={20} style={{ color: "FF8901" }} />
                    </div>
                    {isSidebarOpen && (
                      <div className="my-4 p-3 inline-block text-white">
                        Dashboard
                      </div>
                    )}
                  </div>
                </Link>
                <Link href="/collectionRequest">
                  <div className="flex">
                    <div className="hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700">
                      <FaTasks size={20} style={{ color: "FF8901" }} />
                    </div>
                    {isSidebarOpen && (
                      <div className="my-4 p-3 inline-block text-white">
                        Requests
                      </div>
                    )}
                  </div>
                </Link>
                <Link href="/collectionPayment">
                  <div className="flex">
                    <div className="bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700">
                      <FaWallet size={20} style={{ color: "FF8901" }} />
                    </div>
                    {isSidebarOpen && (
                      <div className="my-4 p-3 inline-block text-white">
                        Payments
                      </div>
                    )}
                  </div>
                </Link>
              </>
            )}
          </div>
          <span className="border-b-[1px] border-orange-500  w-full p-2 mt-10"></span>
          <div className="mt-8">
            <Link href="/settings">
              <div className="flex">
                <div
                  className={`bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700 ${
                    activeLink === "Settings" ? "bg-green-700" : "bg-gray-100"
                  }`}
                >
                  <FiSettings size={20} style={{ color: "FF8901" }} />
                </div>
                {isSidebarOpen && (
                  <div
                    className={`my-4 p-4 mr-4 inline-block ${
                      activeLink === "Settings" ? "text-white" : "text-white"
                    }`}
                  >
                    Settings
                  </div>
                )}
              </div>
            </Link>
            <Link href="/">
              <div className="flex">
                <div
                  className={`bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700 ${
                    activeLink === "Profile" ? "bg-green-700" : "bg-gray-100"
                  }`}
                >
                  <RxPerson size={20} style={{ color: "FF8901" }} />
                </div>
                {isSidebarOpen && (
                  <div
                    className={`my-4 p-4 mr-6 inline-block ${
                      activeLink === "Profile" ? "text-white" : "text-white"
                    }`}
                  >
                    Profile
                  </div>
                )}
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
