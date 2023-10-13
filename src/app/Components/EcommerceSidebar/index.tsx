'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';
import { FaTasks, FaWallet, FaHome, FaUserCog } from 'react-icons/fa';
import { FiSettings } from 'react-icons/fi';


const Sidebar: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [activeLink, setActiveLink] = useState('Dashboard');
  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };
  const sidebarBgClass = 'bg-green-800';
  return (
    <div className='flex'>
      <div
        className={`flex ${isSidebarOpen ? 'w-64' : 'w-32'} h-screen p-4 border-r-[1px] flex flex-col justify-between ${sidebarBgClass}`}
      >
        <div className='flex flex-col items-center'>
          <button
            className={`text-2xl text-white p-2 bg-orange-500  rounded-full  ${
              isSidebarOpen ? 'ml-60' : 'ml-28'
            }`}
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <RxChevronLeft /> : <RxChevronRight />}
          </button>
          <Link href='/'>
            <div className='p-1 inline-block mb-4 ml-1'>
              <img
                src='images/logo.png'
                className={`${isSidebarOpen ? 'w-full' : 'w-10 h-10'}`}
                alt='Logo'
              />
            </div>
          </Link>
          <div className='flex flex-col items-center'>
            <Link href='/dashboard'>
              <div>
                <h1
                  className={`p-3 text-3xl ${
                    activeLink === 'Dashboard' ? 'text-white' : 'text-green-'
                  }`}
                  onClick={() => handleLinkClick('Dashboard')}
                >

                  {isSidebarOpen && 'Collection'}
                </h1>
              </div>
            </Link>
            <Link href='/e-commerce'>
              <div>
                <h1
                  className={`p-3 text-3xl ${
                    activeLink === 'Dashboard' ? 'text-orange-500' : 'text-white'
                  }`}
                  onClick={() => handleLinkClick('E-commerce')}
                >

                  {isSidebarOpen && 'E-commerce'}
                </h1>
              </div>
            </Link>
          </div>
          <span className='border-b-[1px] border-orange-500 w-full p-2'></span>
          <div className='h-96 mt-8'>
            {activeLink === 'Dashboard' && (
              <>
                <Link href='/order'>
                  <div className='flex'>
                    <div className='hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
                      <FaTasks size={20} style={{ color: 'FF8901' }} />
                    </div>
                    {isSidebarOpen && (
                      <div className='my-4 p-3 inline-block text-white'>Orders</div>
                    )}
                  </div>
                </Link>
                <Link href='/delivery'>
                  <div className='flex'>
                    <div className='hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
                      <FaTasks size={20} style={{ color: 'FF8901' }} />
                    </div>
                    {isSidebarOpen && (
                      <div className='my-4 p-3 inline-block text-white'>Delivery</div>
                    )}
                  </div>
                </Link>
                <Link href='/inventory'>
                  <div className='flex'>
                    <div className='hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
                      <FaTasks size={20} style={{ color: 'FF8901' }} />
                    </div>
                    {isSidebarOpen && (
                      <div className='my-4 p-3 inline-block text-white'>Inventory</div>
                    )}
                  </div>
                </Link>
                <Link href='/payment'>
                      <div className='flex'>
                        <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
                          <FaWallet size={20} style={{ color: "FF8901" }} />
                        </div>
                        <div className='my-4 p-3 inline-block  text-white'>Payments</div>
                      </div>
                    </Link>
              </>
            )}
          </div>
          <span className='border-b-[1px] border-orange-500  w-full p-2 mt-10'></span>
          <div className='mt-8'>
            <Link href='/settings'>
              <div className='flex'>
                <div
                  className={`bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700 ${
                    activeLink === 'Settings' ? 'bg-green-700' : 'bg-gray-100'
                  }`}
                >
                  <FiSettings size={20} style={{ color: 'FF8901' }} />
                </div>
                {isSidebarOpen && (
                  <div
                    className={`my-4 p-4 mr-4 inline-block ${
                      activeLink === 'Settings' ? 'text-white' : 'text-white'
                    }`}
                  >
                    Settings
                  </div>
                )}
              </div>
            </Link>
            <Link href='/profile'>
              <div className='flex'>
                <div
                  className={`bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700 ${
                    activeLink === 'Profile' ? 'bg-green-700' : 'bg-gray-100'
                  }`}
                >
                  <FaUserCog size={20} style={{ color: 'FF8901' }} />
                </div>
                {isSidebarOpen && (
                  <div
                    className={`my-4 p-4 mr-6 inline-block ${
                      activeLink === 'Profile' ? 'text-white' : 'text-white'
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
