'use client'
import { useEffect, useState } from "react";
import { getRequests } from "../utilities/utils";

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

const useGetRequests = () => {
  const [requests, setRequests] = useState<Requests[]>([]);

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

  return { requests };
};

export default useGetRequests;










