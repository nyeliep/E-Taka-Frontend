"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../../../config";
import { Button } from "@blueprintjs/core";
import useDeleteRequest from "@/app/hooks/useDeleteRequest";

import { getRequests } from "@/app/utilities/utils";

interface Requests {
  id: number;
  phone:string;
  user:string,
  waste_type: string
  ewaste_type: string;
  quantity: number;
  pickup_date: string;
  is_collected: boolean;
  location: string;
  image: string;
  status: string;
  payment_status: string;
  requester: number;
  requester_name: string;
}

const showToast = (message: string, type: any) => {
  toast(message, { type });
};

const Request = () => {
  const [requests, setRequests] = useState<Requests[]>([]);
  const { deleteRequestById } = useDeleteRequest();



  const [error, setError] = useState("");


  const [selectedRequestId, setSelectedRequestId] = useState<number | null>(
    null
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [editedStatus, setEditedStatus] = useState<string>("");
  const [editedPaymentStatus, setEditedPaymentStatus] = useState<string>("");

  useEffect(() => {
    (async () => {
      try {
        const fetchedRequests = await getRequests();
        setRequests(fetchedRequests);
      } catch (error) {
        console.error("Failed to fetch requests:", error);
      }
    })();
  }, []);

  const updateRequest = (
    id: number | null,
    newStatus: string,
    newPaymentStatus: string
  ) => {
    if (id === null) {
      showToast("Invalid request ID", "error");
    } else {
      const request = requests.find((request) => request.id === id);
      if (request) {
        request.status = newStatus;
        request.payment_status = newPaymentStatus;
        showToast("Request updated successfully", "success");
      } else {
        showToast("Request not found", "error");
      }
    }
  };

  const openPopup = (id: number) => {
    const request = requests.find((req) => req.id === id);
    if (request) {
      setSelectedRequestId(id);
      setEditedStatus(request.status);
      setEditedPaymentStatus(request.payment_status);
      setIsPopupOpen(true);
    } else {
      showToast("Request not found", "error");
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleUpdate = () => {
    const id = selectedRequestId;
    updateRequest(id, editedStatus, editedPaymentStatus);
    closePopup();
  };



  const handleDelete = (id: number) => {
    deleteRequestById(id);
  };




  const deleteRequest = (id: number) => {
    fetch(`${BASE_URL}/collection/requests/${id}`, {
      method: "DELETE",
    })
      .then(async (response) => {
        console.log("Server Response:", response);
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(errorText);
        } else {
          const successMessage = await response.text();
          return { success: true, message: successMessage };
        }
      })
      .then((result) => {
        console.log(result);
        if (result.success) {
          showToast('Successfully declined request', "success");
          setRequests((values) => {
            return values.filter((item) => item.id !== id);
          });
        }
      })
      .catch((error) => {
        showToast('Failed to decline request', "error");
      });
  };



  return (
    <div>
      <ToastContainer />

      {error && <div className="error-message">{error}</div>}



      <div className="lg:h-[70vh] h-[80vh] ml-20 mr-20 p-4 border rounded-lg bg-white mt-10 gap-6">
        <table className="w-full">
          <thead className="shadow-xl">
            <tr>
              <th className="px-6 py-4 text-left">Ewaste Type</th>
              <th className="px-6 py-4 text-left">QTY</th>
              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-6 py-4 text-left">Contact</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Payment</th>
              <th className="px-6 py-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-gray-200 shadow-xl"
              >
                <td className="px-4 py-2 flex items-center">
                {/* <td className="px-6 py-2">{request.image}</td> */}

                  <p className="pt-8">{request.ewaste_type}</p>
                </td>
                <td className="px-6 py-2">{request.quantity}</td>
                <td className="px-6 py-2">{request.requester_name}</td>
                <td className="px-6 py-2">{request.location}</td>
                <td className="px-6 py-2">{request.phone}</td>
                <td className="px-6 py-2">{request.status}</td>
                <td className="px-6 py-2">{request.payment_status}</td>
                <td className="">
                  <div className="flex flex-box">
                    <Button
                      className="text-white border bg-green-500 hover px-2 py-1 mr-2 rounded-md"
                      intent="primary"
                      onClick={() => openPopup(request.id)}
                    >
                      Accept Request
                    </Button>
                    &nbsp;
                    <Button
                      className="text-red-500 border border-red-400 hover:border-red-700 px-2 py-1 rounded-md ml-8"
                      intent="danger"
                      onClick={() => deleteRequest(request.id)}
                    >
                      Delete Request
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-6 m-6">
            <div className="bg-white p-4 rounded-lg shadow-md w-[30vw] h-[20vh] text-center">
              <div>
                <label>Status:</label>
                <select
                  value={editedStatus}
                  onChange={(e) => setEditedStatus(e.target.value)}
                  className="m-4 mr-4"
                >
                  <option value="Processing">Processing</option>
                  <option value="Completed">Completed</option>
                  <option value="Pending">Pending</option>
                </select>
              </div>
              <div>
                <label className="ml-4">Payment Status:</label>
                <select
                  value={editedPaymentStatus}
                  onChange={(e) => setEditedPaymentStatus(e.target.value)}
                >
                  <option value="Unpaid">Unpaid</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
              <button
                className="text-white border border-green-400 bg-green-500 hover:border-green-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2 mr-6"
                onClick={handleUpdate}
              >
                Update
              </button>
              <button
                className="text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2"
                onClick={closePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Request;




































