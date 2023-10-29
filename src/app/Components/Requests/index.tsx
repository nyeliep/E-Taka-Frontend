"use client";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BASE_URL } from "../../../../config";
import { Button } from "@blueprintjs/core";

import { getRequests } from "@/app/utilities/utils";

interface Requests {
  id: number;
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

      // fetch(`${BASE_URL}/collection/requests/${id}`, {
        fetch(``, {
        method: "PUT",
        mode: "cors",
        body: JSON.stringify(request),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((response) => response.json())
         {
          showToast("Request updated successfully", "success");
        };
    } else {
      showToast("Request not found", "error");
    }
  }
};


  const openPopup = (id: number) => {
    const request = requests.find((req) => req.id === id);
    setSelectedRequestId(id);
    setEditedStatus(request.status);
    setEditedPaymentStatus(request.payment_status);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  const handleUpdate = () => {
    const id = selectedRequestId;
    updateRequest(id, editedStatus, editedPaymentStatus);
    closePopup();
  };

  const deleteRequest = (id: number) => {
    fetch(`${BASE_URL}/collection/requests/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Request failed with status: ${response.status}`);
        }
      })
      .then(() => {
        setRequests((values) => {
          return values.filter((item) => item.id !== id);
        });
        showToast("Request declined successfully", "success");
      })
      .catch((error) => {
        console.error("Decline request failed:", error);
        showToast("Failed to delete request", "error");
      });
  };

  return (
    <div><ToastContainer />
    <div className="lg:h-[70vh] h-[80vh] ml-20 mr-20 p-4 border rounded-lg bg-white mt-10 gap-6">
      <table className="w-full">

        <thead className="shadow-xl">
          <tr>
            <th className="px-6 py-4 text-left">Product</th>
            <th className="px-6 py-4 text-left">QTY</th>
            <th className="px-6 py-4 text-left">Customer</th>
            <th className="px-6 py-4 text-left">Location</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Payment</th>
            <th className="px-6 py-4 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map((request) => (
            <tr key={request.id} className="border-b border-gray-200 shadow-xl">
              <td className="px-4 py-2 flex items-center">
                <img
                  src="/images/laptop3.jpeg"
                  alt={request.ewaste_type}
                  className="w-32 h-20 object-cover mr-2 pt-6"
                />
                <p className="pt-8">{request.ewaste_type}</p>
              </td>
              <td className="px-6 py-2">{request.quantity}</td>
              <td className="px-6 py-2">{request.requester_name}</td>
              <td className="px-6 py-2">{request.location}</td>
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
                    Decline Request
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
            onClick={handleUpdate}>Update</button>
            <button
            className="text-red-500 border border-red-400 hover:border-red-700 border-solid-[1px] px-2 py-1 rounded w-40 h-10 mt-2"
            onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default Request;
















// import React, { useEffect, useState } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { BASE_URL } from "../../../../config";
// import { Button, EditableText } from "@blueprintjs/core";

// import { getRequests } from "@/app/utilities/utils";
// import useGetRequests from "@/app/hooks/useGetRequests";

// interface Requests {
//   id: number;
//   ewaste_type: string;
//   quantity: number;
//   pickup_date: string;
//   is_collected: boolean;
//   location: string;
//   image: string;
//   status: string;
//   payment_status: string;
//   requester: number;
//   requester_name: string;
// }

// const showToast = (message: string, type: any) => {
//   toast(message, { type });
// };

// const Request = () => {
//   const [requests, setRequests] = useState<Requests[]>([]);
//   const [editedStatus, setEditedStatus] = useState<string>("");
//   const [editedPaymentStatus, setEditedPaymentStatus] = useState<string>("");
//   const [isPopupOpen, setIsPopupOpen] = useState(false);
//   const [selectedRequestId, setSelectedRequestId] = useState<number | null>(null);

//   useEffect(() => {
//     (async () => {
//       try {
//         const fetchedRequests = await getRequests();
//         setRequests(fetchedRequests);
//       } catch (error) {
//         console.error("Failed to fetch requests:", error);
//       }
//     })();
//   }, []);

//   const updateRequest = (id: number) => {
//     const user = requests.find((user) => user.id === id);

//     fetch(`${BASE_URL}/collection/requests/${id}`, {
//       method: "PUT",
//       mode: 'cors',
//       body: JSON.stringify(user),
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//     })
//       .then((response) => response.json())
//       .then(() => {
//         showToast("Request updated successfully", "success");
//       });
//   };

//   const openPopup = (id: number) => {
//     setSelectedRequestId(id);
//     setIsPopupOpen(true);
//   };

//   const closePopup = () => {
//     setIsPopupOpen(false);
//   };

//   const handleStatusChange = (id: number, newStatus: string) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((request) =>
//         request.id === id ? { ...request, status: newStatus } : request
//       )
//     );
//   };

//   const handlePaymentStatusChange = (id: number, newPaymentStatus: string) => {
//     setRequests((prevRequests) =>
//       prevRequests.map((request) =>
//         request.id === id ? { ...request, payment_status: newPaymentStatus } : request
//       )
//     );
//   };

//   const deleteRequest = (id: number) => {
//     fetch(`${BASE_URL}/collection/requests/${id}`, {
//       method: "DELETE",
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error(`Request failed with status: ${response.status}`);
//         }
//       })
//       .then(() => {
//         setRequests((values) => {
//           return values.filter((item) => item.id !== id);
//         });
//         showToast("Request declined successfully", "success");
//       })
//       .catch((error) => {
//         console.error("Decline request failed:", error);
//         showToast("Failed to delete request", "error");
//       });
//   };

//   return (
//     <div className="lg:h-[70vh] h-[80vh] ml-20 mr-20 p-4 border rounded-lg bg-white mt-10 gap-6">
//       <table className="w-full">
//         <ToastContainer />
//         <thead className="shadow-xl">
//           <tr>
//             <th className="px-6 py-4 text-left">Product</th>
//             <th className="px-6 py-4 text-left">QTY</th>
//             <th className="px-6 py-4 text-left">Customer</th>
//             <th className="px-6 py-4 text-left">Location</th>
//             <th className="px-4 py-2 text-left">Status</th>
//             <th className="px-4 py-2 text-left">Payment</th>
//             <th className="px-6 py-4 text-left">Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {requests.map((request) => (
//             <tr key={request.id} className="border-b border-gray-200 shadow-xl">
//               <td className="px-4 py-2 flex items-center">
//                 <img
//                   src="/images/laptop3.jpeg"
//                   alt={request.ewaste_type}
//                   className="w-32 h-20 object-cover mr-2 pt-6"
//                 />
//                 <p className="pt-8">{request.ewaste_type}</p>
//               </td>
//               <td className="px-6 py-2">{request.quantity}</td>
//               <td className="px-6 py-2">{request.requester_name}</td>
//               <td className="px-6 py-2">{request.location}</td>
//               <td className="px-6 py-2" >
//                 {request.status}
//                 {/* <EditableText
//                   value={request.status}
//                   onChange={(newStatus) => handleStatusChange(request.id, newStatus)}
//                 /> */}
//                 </td>
//               <td className="px-6 py-2">
//                 {request.payment_status}
//                 {/* <EditableText
//                   value={request.payment_status}
//                   onChange={(newPaymentStatus) =>
//                     handlePaymentStatusChange(request.id, newPaymentStatus)
//                   }
//                 /> */}
//                 </td>
//               <td className="">
//                 <div className="flex flex-box">
//                   <Button
//                     className="text-white border bg-green-500 hover px-2 py-1 mr-2  rounded-md"
//                     intent="primary"
//                     onClick={() => updateRequest(request.id)}
//                   >
//                     Accept Request
//                   </Button>
//                   &nbsp;
//                   <Button
//                     className="text-red-500 border border-red-400 hover:border-red-700 px-2 py-1 rounded-md ml-8"
//                     intent="danger"
//                     onClick={() => deleteRequest(request.id)}
//                   >
//                     Decline Request
//                   </Button>
//                 </div>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Request;
