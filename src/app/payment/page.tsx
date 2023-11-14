"use client";
import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import { FaSyncAlt } from "react-icons/fa";
import Layout from "../Components/Layout";
import EcommerceLayout from "../Components/EcommerceLayout";

const RefreshButton = () => {
  const [isRotating, setIsRotating] = useState(false);
  const handleRefreshClick = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 1000);
  };
  return (
    <div
      className={`h-9 w-10 rounded-md mt-10 bg-[#FFB056] ml-[290px] ${
        isRotating ? "animate-spin" : ""
      }`}
      onClick={handleRefreshClick}
    >
      <FaSyncAlt
        className="text-white ml-[10px] pt-[5px]"
        style={{ fontSize: "24px" }}
      />
    </div>
  );
};
const PaymentPage = () => {
  return (
    <EcommerceLayout>
      <div className="overflow-hidden">


        <div className="text-center items-center flex justify-center mt-12">
          <h1 className="text-3xl font-bold">Payment</h1>
        </div>

        <div className="bg-white shadow-md w-[371px] h-[170px] ml-[600px] m p-4 mt-3 justify-center border border-gray-300 rounded">
          <button className="mt-3">
            <h1 className="text-1xl text-[#555F7E] mr-[70px]">Total Sales</h1>
            <p className="text-2xl font-bold">Ksh.40,000</p>
          </button>
          <div className="mt-[-30px] mr-[30px]">
            <RefreshButton />
          </div>
        </div>
        <div className="mt-12 ml-[1400px]">
          <h2 className="text-[#007F56] text-2xl underline">Payments</h2>
        </div>
        <div className="text-center w-150vh shadow-md flex ml-[100px] gap-[280px] mt-12">
          <p className="text-lg text-[#555F7E] font-medium">Name</p>
          <p className="text-lg text-[#555F7E] font-medium">Item</p>
          <p className="text-lg text-[#555F7E] font-medium">Price</p>
          <p className="text-lg text-[#555F7E] font-medium">Date</p>
          <p className="text-lg text-[#555F7E] font-medium">Status</p>
        </div>
        <div className='text-center mt-4'>
            <p className='text-lg font-medium mt-12'>No Payments have made yet</p>
          </div>




      </div>
    </EcommerceLayout>
  );
};
export default PaymentPage;
