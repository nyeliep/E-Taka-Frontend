"use client";

import React, { useState, useEffect } from "react";
import useGetRequests from "@/app/hooks/useGetRequests";
import useDeleteRequest from "@/app/hooks/useDeleteRequest";
import useEditRequests from "@/app/hooks/useEditRequest";
import ConfirmDeleteModal from "../ConfirmDeleteModal";

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
  requester_name: string;
};

const RecentRequest = () => {
  const { requests } = useGetRequests();
  const { editRequest } = useEditRequests();
  const { deleteRequestById, isDeleting, error } = useDeleteRequest();
  // const [request, setRequests] = useState([]); // Initialize your requests

  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  // const [selectedRequestId, setSelectedRequestId] = useState(null);
  const [request, setRequests] = useState<Request[]>([]);
  const [processingRequests, setProcessingRequests] = useState<Request[]>([]);
  const [requestStatus, setRequestStatus] = useState<{ [key: number]: string }>(
    {}
  );
  const [newStatus, setNewStatus] = useState("");

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedRequestId, setSelectedRequestId] = useState(null);

  const openDeleteConfirmation = (id:any) => {
    setSelectedRequestId(id);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteConfirmation = () => {
    setSelectedRequestId(null);
    setShowDeleteConfirmation(false);
  };

  const handleDeleteRequest = (id:any) => {
    openDeleteConfirmation(id);
  };

  const handleConfirmDelete = () => {
    if (selectedRequestId) {
      deleteRequestById(selectedRequestId)
        .then(() => {
          const updatedRequests = requests.filter(
            (request) => request.id !== selectedRequestId
          );
          setRequests(updatedRequests);
        })
        .catch((error) => {
          console.error("Error deleting request:", error);
        });
    }

    closeDeleteConfirmation();
  };


  const openEditModal = (id: any) => {
    setSelectedRequestId(id);
    setShowEditModal(true);
  };

  const closeEditModal = () => {
    setSelectedRequestId(null);
    setShowEditModal(false);
  };

  const handleEditRequest = (id: any) => {
    openEditModal(id);
  };

  const handleStatusChange = () => {
    if (selectedRequestId && newStatus) {
      editRequest(selectedRequestId, newStatus)
        .then((editedRequest) => {
          console.log("Request edited:", editedRequest);
          closeEditModal();
        })
        .catch((error) => {
          console.error("Error editing request:", error);
        });
    }
  };

  const handleSubmitEdit = (id: number) => {
    if (newStatus) {
      editRequest(id, newStatus)
        .then((editedRequest) => {
          console.log("Request edited:", editedRequest);
        })
        .catch((error) => {
          console.error("Error editing request:", error);
        });
    }
  };




  return (
    <div>
      <h1 className="text-3xl mt-10 ml-20">Requests</h1>

      <div className="lg:h-[70vh] h-[80vh] ml-20 mr-20 p-4 border rounded-lg bg-white mt-10 gap-6">
        <table className="w-full">
          <thead>
            <tr className="shadow-xl ">
            {/* <th className="px-6 py-4 text-left">Id</th> */}
              <th className="px-6 py-4 text-left">Product</th>
              <th className="px-6 py-4 text-left">QTY</th>

              <th className="px-6 py-4 text-left">Customer</th>
              <th className="px-6 py-4 text-left">Location</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-6 py-4 text-left ">Action</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request) => (
              <tr
                key={request.id}
                className="border-b border-gray-200 shadow-xl"
              >
                {/* <td className="px-6 py-2">{request.id}</td> */}
                <td className="px-4 py-2 flex items-center">
                  <img
                    src="/images/laptop3.jpeg"
                    alt={request.ewaste_type}
                    className="w-32 h-20 object-cover mr-2 pt-6"
                  />
                  <p className="pt-8">{request.ewaste_type}</p>
                </td>
                <td className="px-6 py-2">{request.quantity}</td>
                <td className="px-4 py-2">{request.requester_name}</td>
                <td className="px-4 py-2">{request.location}</td>
                <td className="px-4 py-2">{request.status}</td>

                <td className="px-4 py-14  flex flex-box">
                  <button
                    type="button"
                    onClick={() => handleEditRequest(request.id)}
                    className="text-white border bg-green-500 hover:border-blue-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mr-4"
                  >
                    Accept Request
                  </button>

                  {showEditModal && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 p-6 m-6">
                      <div className="bg-white p-4 rounded-lg shadow-md  w-[50vw] h-[30vh] text-center">
                        <p className="pb-4">
                          Edit the status for this request:
                        </p>
                        <select
                          value={newStatus}
                          onChange={(e) => setNewStatus(e.target.value)}
                        >
                          <option value="processing">Processing</option>
                          <option value="completed">Completed</option>
                          <option value="pending">Pending</option>
                        </select>
                        <div className="flex flex-box mt-10 justify-center">
                          <button
                            className="text-white border border-green-400 bg-green-500 hover:border-green-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2 mr-6"
                            onClick={handleStatusChange}
                            // onClick ={handleEditRequest}
                          >
                            Save
                          </button>
                          <button
                            className="text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2"
                            onClick={closeEditModal}
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div>
                    {error && <p>Error: {error}</p>}
                    {isDeleting && <p>Deleting...</p>}
                    {showDeleteConfirmation && (
                  <ConfirmDeleteModal
                   onRequestConfirm={handleConfirmDelete}
                   onRequestCancel={closeDeleteConfirmation}
                   />
                  )}
                    <button
                      className="text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 "
                      onClick={() => handleDeleteRequest(request.id)}
                    >
                      Decline Request
                    </button>
                  </div>
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
