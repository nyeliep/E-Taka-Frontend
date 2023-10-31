import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteRequest } from "../utilities/utils";



const useDeleteRequest = () => {
    const showToast = (message: string, type: "success" | "error") => {
      toast(message, { type });
    };

    const deleteRequestById = async (id: number) => {
      try {
        const response = await deleteRequest(id);

        if (response.ok) {
          showToast("Request deleted successfully", "success");
        } else {
          showToast("Fail to delete request", "error");
        }
      } catch (error) {
        console.error(error);
      }
    };

    return {
      deleteRequestById,
    };
  };

  export default useDeleteRequest;


