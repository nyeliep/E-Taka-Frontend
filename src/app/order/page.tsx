"use client";
import React, { useState } from "react";
import { MdAccountCircle } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import useGetOrders from "../hooks/useGetOrders";
import EcommerceLayout from "../Components/EcommerceLayout";



const OrderPage = () => {
  const [orderStatus, setOrderStatus] = useState<{ [orderId: number]: string }>({});
  const { order } = useGetOrders();

  const handleAccept = (orderId:number) => {
    setOrderStatus({ ...orderStatus, [orderId]: "Processing" });
  };

  const handleDecline = (orderId: number) => {
    setOrderStatus({ ...orderStatus, [orderId]: "Cancelled" });
  };

  return (
    <EcommerceLayout>
      <div className="flex flex-col items-center justify-center mt-12">
        <div className="flex items-center justify-end ">
          <MdAccountCircle className="text-black mr-[-900px] text-5xl mt-[-40px]" />
        </div>

        <div
          className="relative mr-[650px] mt-[-30px] ml-[100px] rounded-6xl"
          style={{ width: "900px" }}
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

        <div className="w-[1300px] flex justify-between mt-12">
          <button className="bg-white shadow-xl w-56 h-28 p-4 border border-gray-300 rounded">
            <h1 className="text-3xl">30</h1>
            <p className="text-sm">Upcoming orders</p>
          </button>{" "}
          <button className="bg-white shadow-md w-56 h-28 p-4 border border-gray-300 rounded">
            <h1 className="text-3xl">10</h1>
            <p className="text-sm">Processing orders</p>
          </button>{" "}
          <button className="bg-white shadow-md w-56 h-28 p-4 border border-gray-300 rounded">
            <h1 className="text-3xl">3</h1>
            <p className="text-sm">Cancelled orders</p>
          </button>
          <button className="bg-white shadow-xl w-56 h-28 p-4 border border-gray-300 rounded">
            <h1 className="text-3xl">300</h1>
            <p className="text-sm">Completed orders</p>
          </button>
        </div>

        <div className=" mt-12 bg-white w-[1400px] p-6 gap-[180px] flex mr-[10px] w- shadow-lg h-1544 bg-white flex mt-8">
          <p className="font-bold">Item Ordered</p>
          <p className="font-bold">id Number</p>

          <p className="font-bold">Time</p>
          <p className="font-bold"> Total Paid</p>
          <div>
            <p className="font-bold ml-[80px]">Status</p>
          </div>
        </div>

        {order.map((item) => (
          <div
            className="w-[1370px] bg-[#007F56] p-4 text-white mr-[30px] flex mt-12 flex-col gap-12 rounded-xl"
            key={item.id}
          >
            <div className="flex items-center gap-[180px]">
              <h2 className="text-base font-bold">Laptop,Microwave</h2>
              <p>{item.user}</p>
              <p>{} 2023-09-20</p>
              <p>ksh.{item.total_price}</p>
              <form className="gap-[px]">
                <button
                  type="button"
                  onClick={() => handleAccept(item.id)}
                  className={`bg-[#FFB056] text-white-500 px-4  rounded w-30 h-7 mr-[10px] text-center ${
                    orderStatus[item.id] === "Processing"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={orderStatus[item.id] === "Processing"}
                >
                  {orderStatus[item.id] === "Processing"
                    ? "Processing"
                    : "Accept"}
                </button>
                <button
                  type="button"
                  onClick={() => handleDecline(item.id)}
                  className={`bg-[#F5F5F5] text-[#FF8901] border-solid-[1px] px-2 py-1 rounded w-30 h-7 ${
                    orderStatus[item.id] === "Cancelled"
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={orderStatus[item.id] === "Cancelled"}
                >
                  {orderStatus[item.id] === "Cancelled"
                    ? "Cancelled"
                    : "Decline"}
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </EcommerceLayout>
  );
};

export default OrderPage;
