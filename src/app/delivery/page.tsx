'use client'
import React, { useState } from 'react';
import { MdAccountCircle } from 'react-icons/md';
import { ImSearch } from 'react-icons/im';
import useGetDelivery from '../../app/hooks/useGetDelivery';
import EcommerceLayout from '../Components/EcommerceLayout';

const DeliveryPage = () => {
  const [selectedTab, setSelectedTab] = useState('All');
  const { delivery } = useGetDelivery();

  const filteredDeliveries = delivery.filter((deliveryItem) => {
    if (selectedTab === 'All' || selectedTab === 'In-Progress') {
      return true;
    } else if (selectedTab === 'Delivered') {
      return deliveryItem.status === 'Delivered';
    }
    return false;
  });

  const noDeliveredOrders = selectedTab === 'Delivered' && filteredDeliveries.length === 0;

  return (
    <EcommerceLayout>
      <div className='overflow-hidden'>
        <div className='flex items-center justify-end'>
          <MdAccountCircle className='text-black mr-7 text-5xl mt-2' />
        </div>

        <div className='relative mt-[1px] ml-10 mt-[-50px] rounded-6xl' style={{ width: '5400px' }}>
          <input
            type='text'
            placeholder='Search...'
            className='py-4 pl-[42px] pr-[1100px] border rounded-lg border-black font-light focus:outline-none'
          />
          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
            <div className='flex items-center justify-center rounded-md shadow-md bg-white'>
              <ImSearch className='text-darkGreen text-2xl' />
            </div>
          </div>
        </div>

        <div className='text-center items-center flex justify-center mt-12'>
          <p className='text-3xl font-bold'>Delivery</p>
        </div>

        <div className='flex justify-center items-flex mt-12'>
          <div className='text-center flex gap-[40px] ml-[1000px]'>
            <p
              className={`text-xl ${selectedTab === 'All' ? 'text-[#007F56] underline cursor-pointer' : 'cursor-pointer'}`}
              onClick={() => setSelectedTab('All')}
            >
              All
            </p>
            <p
              className={`text-xl ${selectedTab === 'In-Progress' ? 'text-[#007F56] underline cursor-pointer' : 'cursor-pointer'}`}
              onClick={() => setSelectedTab('In-Progress')}
            >
              In-Progress
            </p>
            <p
              className={`text-xl ${selectedTab === 'Delivered' ? 'text-[#FF8901] underline cursor-pointer' : 'cursor-pointer'}`}
              onClick={() => setSelectedTab('Delivered')}
            >
              Delivered
            </p>
          </div>
        </div>

        <div className='text-center w-150vh shadow-md flex ml-[35px] gap-[360px] mt-12'>
          <p className='text-lg font-bold'>Name</p>
          <p className='text-lg font-bold'>Order Id</p>
          <p className='font-bold -ml-[40px]'>Date</p>
          <p className='font-bold ml-[70px]'>Status</p>
        </div>

        {noDeliveredOrders ? (
          <div className='text-center mt-4'>
            <p className='text-lg font-medium mt-12'>No orders delivered yet</p>
          </div>
        ) : (
          filteredDeliveries.map((deliveryItem) => (
            <div className='text-center w-150vh shadow-md flex ml-[35px] gap-[350px] mt-[50px]' key={deliveryItem.id}>
              <p className='text-lg w-[7px]'>{deliveryItem.customer_name}</p>
              <p className='text-lg ml-[70px]'>{deliveryItem.id}</p>
              <p>{} 2023-09-20</p>
              <button
                className={`mb-[40px] mr-[0px] ${
                  deliveryItem.status === 'Delivered' ? 'bg-[#007F56]' : 'bg-[#FF8901]'
                } w-[160px] py-[8px] rounded-md text-white`}>
                {deliveryItem.status}
              </button>
            </div>
          ))
        )}
      </div>
    </EcommerceLayout>
  );
};

export default DeliveryPage;



