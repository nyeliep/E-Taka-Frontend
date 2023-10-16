"use client";

import React, { useState, useEffect } from "react";
import useGetRequests from "@/app/hooks/useGetRequests";

type Request = {
  id: number;
  status: string;
  ewaste_type: string;
  quantity: number;
  pickup_date: string;
  is_collected: boolean;
  location: string;
  image: string;
  payment_status: string;
  requester: number;
};

const RecentRequest = () => {
  const { requests } = useGetRequests();
  const [processingRequests, setProcessingRequests] = useState<Request[]>([]);
  const [requestStatus, setRequestStatus] = useState<{ [key: number]: string }>(
    {}
  );

  const handleAccept = (id: number) => {
    setRequestStatus({ ...requestStatus, [id]: "Processing" });
  };

  const handleDecline = (id: number) => {
    setRequestStatus({ ...requestStatus, [id]: "Cancelled" });
  };

  return (
    <div>
      <h1 className="text-3xl mt-10 ml-20">Requests</h1>

      <div className="lg:h-[70vh] h-[80vh] ml-20 mr-20 p-4 border rounded-lg bg-white mt-10 gap-6">
        <table className="w-full">
          <thead>
            <tr className="shadow-xl ">
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">QTY</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Location</th>
              {/* <th className='px-4 py-2 text-left'>Status</th> */}
              <th className="px-6 py-4 text-left ">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-gray-200 shadow-xl"
              >
                <td className="px-4 py-2 flex items-center">
                  <img
                    src="/images/laptop3.jpeg"
                    alt={request.ewaste_type}
                    className="w-32 h-20 object-cover mr-2 pt-6"
                  />
                  <p className="pt-8">{request.ewaste_type}</p>
                </td>
                <td className="px-6 py-2">{request.quantity}</td>
                <td className="px-4 py-2">{request.requester}</td>
                <td className="px-4 py-2">{request.location}</td>

                <td className="px-4 py-10">
                  <button
                    type="button"
                    onClick={() => handleAccept(request.id)}
                    className={`text-white border bg-green-500 rounded w-40 h-10 mr-[10px]  text-center ${
                      requestStatus[request.id] === "Processing"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={requestStatus[request.id] === "Processing"}
                  >
                    {requestStatus[request.id] === "Processing"
                      ? "Processing"
                      : "Accept"}
                  </button>

                  <button
                    type="button"
                    onClick={() => handleDecline(request.id)}
                    className={`text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 ${
                      requestStatus[request.id] === "Cancelled"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                    disabled={requestStatus[request.id] === "Cancelled"}
                  >
                    {requestStatus[request.id] === "Cancelled"
                      ? "Cancelled"
                      : "Decline"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentRequest;