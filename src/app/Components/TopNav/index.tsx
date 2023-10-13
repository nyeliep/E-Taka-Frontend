'use client'
import React from 'react';

import { RxAvatar } from 'react-icons/rx';

const TopNav = () => {

  return (
    <div className='flex justify-between items-center px-4 pt-4'>
      <div className='flex items-center flex-grow ml-10'>
        <input
          type='text'
          placeholder='Search...'
          className='border p-2 rounded-xl bg-gray-200 mr-4 w-5/6 shadow-md ml-6 text-xl'
        />
      </div>
      <div className='flex items-center space-x-4'>
        <RxAvatar size={45} />
      </div>
    </div>
  );
};

export default TopNav;


