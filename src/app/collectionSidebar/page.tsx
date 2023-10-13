import React from 'react';
import Link from 'next/link';
import { FaHome, FaTasks, FaWallet } from 'react-icons/fa';
import { FiSettings, FiLogOut } from 'react-icons/fi';

const CollectionSidebar: React.FC = () => {
  return (
    <div className='flex flex-col'>
      <Link href='/dashboard'>
        <div className='flex'>
          <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-4 p-3 rounded-lg inline-block'>
            <FaHome size={20} style={{ color: 'FF8901' }} />
          </div>
          <div className='my-4 p-3 inline-block text-white'>Dashboard</div>
        </div>
      </Link>
      <Link href='/collectionRequest'>
        <div className='flex'>
          <div className='hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
            <FaTasks size={20} style={{ color: 'FF8901' }} />
          </div>
          <div className='my-4 p-3 inline-block text-white'>Requests</div>
        </div>
      </Link>
      <Link href='/collectionPayment'>
        <div className='flex'>
          <div className='bg-gray-100 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
            <FaWallet size={20} style={{ color: 'FF8901' }} />
          </div>
          <div className='my-4 p-3 inline-block text-white'>Payments</div>
        </div>
      </Link>
      <span className='border-b-[1px] border-orange-500 w-full p-2 mt-10'></span>
      <Link href='/settings'>
        <div className='flex'>
          <div className='hover-bg-gray-200 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
            <FiSettings size={20} style={{ color: 'FF8901' }} />
          </div>
          <div className='my-4 p-4 mr-4 inline-block text-white'>Settings</div>
        </div>
      </Link>
      <Link href='/'>
        <div className='flex'>
          <div className='hover-bg-gray-200 hover:bg-gray-200 cursor-pointer my-6 p-3 rounded-lg inline-block bg-green-700'>
            <FiLogOut size={20} style={{ color: 'FF8901' }} />
          </div>
          <div className='my-4 p-4 mr-6 inline-block text-white'>Logout</div>
        </div>
      </Link>
    </div>
  );
};

export default CollectionSidebar;

