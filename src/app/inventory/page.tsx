"use client";
import React from "react";
import { MdAccountCircle } from "react-icons/md";
import { ImSearch } from "react-icons/im";
import Layout from "../Components/Layout";
import useGetProducts from "../hooks/useGetProduct";
import EcommerceLayout from "../Components/EcommerceLayout";

const InventoryPage = () => {
  const { product } = useGetProducts();

  return (
    <EcommerceLayout>
      <div className="overflow-hidden">

        <div className="flex justify-center items-center h-15vh mt-6">
          <div className="flex items-center mt-12">
            <h1 className="font-bold text-3xl mr-5">Inventory</h1>
          </div>
        </div>

        <div className="flex justify-center mt-10 gap-[60px] ml-[40px]">
          <button
            style={{ backgroundColor: "green", color: "white" }}
            className="hover:bg-[#007F56]-700 px-4 py-2 rounded"
          >
            Automotive Gadgets
          </button>

          <button
            style={{
              backgroundColor: "white",
              color: "green",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            className="hover:bg-green-700 px-[50px] py-2 rounded"
          >
            Phone Appliances
          </button>

          <button
            style={{
              backgroundColor: "white",
              color: "green",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            className="hover:bg-green-700 px-[50px] py-2 rounded"
          >
            Home Appliances
          </button>

          <button
            style={{
              backgroundColor: "white",
              color: "green",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            className="hover:bg-green-700 px-[50px] py-2 rounded"
          >
            Gaming Gadgets
          </button>

          <button
            style={{
              backgroundColor: "white",
              color: "green",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.4)",
            }}
            className="hover:bg-green-700 px-[50px] py-2 rounded"
          >
            Office Appliances
          </button>
        </div>

        <div className="ml-[930px] mt-12 text-2xl font-bold">
          <h2>Status</h2>
        </div>

        <div className="container mx-auto mt-[-60px] pt-12 w-[170vh] ml-[100px] ">
          {product.map((p) => (
            <div
              key={p.product_id}
              className="bg-white p-2 rounded-lg shadow-xl gap-12"
            >
              <div className="flex items-center gap-8">
                <div className="w-24 h-24">
                  <img
                    src={`images/tv.jpg`}
                    alt="Product Image"
                    className="w-full h-full"
                  />
                </div>
                <div className="border-l border-black h-50"></div>
                <div className="flex flex-col ml-0">
                  <h2 className="font-bold text-xl">{p.product_name}</h2>
                  <span>
                    Stocked Product{" "}
                    <span style={{ color: "orange" }}>
                      {p.quantity_of_items}
                    </span>
                  </span>
                </div>
                <div className="border-l border-black h-16 ml-30 "></div>
                <div className="flex flex-col ml-35 pl-30">
                  <span>Price</span>
                  <span className="font-bold">Ksh.{p.price}</span>
                </div>
                <div className="ml-80">
                  <div
                    className={`flex gap-[200px] font-bold ${
                      p.is_available ? "text-[#FF0000]" : "text-[#007F56]"
                    }`}
                  >
                    {p.is_available ? "Disabled" : "Enabled"}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </EcommerceLayout>
  );
};

export default InventoryPage;
