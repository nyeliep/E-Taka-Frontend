import { useEffect, useState } from "react";
import { deleteRequest } from "../utilities/utils";

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
}

const useDeleteRequest = () => {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const deleteRequestById = async (requestId: number) => {
    setIsDeleting(true);
    setError(null);

    try {
      await deleteRequest(requestId);

    } catch (error) {
      setError("Failed to delete request");
    } finally {
      setIsDeleting(false);
    }
  };

  return { deleteRequestById, isDeleting, error };
};

export default useDeleteRequest;
