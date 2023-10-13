import React from 'react';

const TopCards = () => {
  return (

    <div className='flex gap-20 m-10 justify-between mt-20'>
      <h1 className='text-4xl ml-10 font-bold '>Overview</h1>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between border p-4 rounded-lg ring-gray-200 ring-2 shadow-xl  ' style={{width:"30vh", height:"15vh"}}>
        <div className='flex flex-col w-full pb-4 text-center mt-6'>
        <p className='text-gray-600'>Daily Expenditure</p>
          <p className='text-2xl font-bold'>20,000</p>

        </div>

      </div>
      <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-64 border p-4 rounded-lg ring-gray-200 ring-2 shadow-xl'  style={{width:"30vh", height:"15vh"}}>
        <div className='flex flex-col w-full pb-4 text-center  mt-6'>
        <p className='text-gray-600'>Fullfilled Requests</p>
          <p className='text-2xl font-bold'>200</p>

        </div>

      </div>
      <div className='lg:col-span-1 bg-white flex justify-between w-64 border p-4 rounded-lg ring-gray-200 ring-2 shadow-xl'  style={{width:"30vh", height:"15vh"}}>
        <div className='flex flex-col w-full pb-4 text-center  mt-6'>
               <p className='text-gray-600'>Failed Requests</p>
          <p className='text-2xl font-bold'>200</p>

        </div>

      </div>
    </div>
  );
};

export default TopCards;


