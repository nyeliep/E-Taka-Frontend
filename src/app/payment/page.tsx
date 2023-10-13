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
        <div className="flex items-center justify-end">
          <MdAccountCircle className="text-black mr-700 text-5xl mt-2" />
        </div>
        <div
          className="relative mt- ml-20 mt-[-40px] rounded-6xl"
          style={{ width: "5400px" }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="py-4 pl-[42px] pr-[1100px] border rounded-lg border-black font-light focus:outline-none"
          />
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <ImSearch className="text-darkGreen text-2xl" />
          </div>
        </div>
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
        <div className="text-center w-150vh flex ml-[100px] gap-[210px] mt-12">
          <p className="text-lg">Linet Musembi</p>
          <p className="text-lg">Microwave</p>
          <p>Ksh.4000</p>
          <p className="ml-[60px]">Sep 25,2023</p>
          <p className="ml-[30px] text-[#007F56]">Paid</p>
        </div>
        <div className="text-center w-150vh flex ml-[100px] gap-[210px] mt-12">
          <p className="text-lg">Linet Musembi</p>
          <p className="text-lg">Microwave</p>
          <p>Ksh.4000</p>
          <p className="ml-[60px]">Sep 25,2023</p>
          <p className="ml-[30px] text-[#007F56]">Paid</p>
        </div>
        <div className="text-center w-150vh flex ml-[100px] gap-[210px] mt-12">
          <p className="text-lg">Linet Musembi</p>
          <p className="text-lg">Microwave</p>
          <p>Ksh.4000</p>
          <p className="ml-[60px]">Sep 25,2023</p>
          <p className="ml-[30px] text-[#007F56]">Paid</p>
        </div>
        <div className="text-center w-150vh flex ml-[100px] gap-[210px] mt-12">
          <p className="text-lg">Linet Musembi</p>
          <p className="text-lg">Microwave</p>
          <p>Ksh.4000</p>
          <p className="ml-[60px]">Sep 25,2023</p>
          <p className="ml-[30px] text-[#007F56]">Paid</p>
        </div>
      </div>
    </EcommerceLayout>
  );
};
export default PaymentPage;
