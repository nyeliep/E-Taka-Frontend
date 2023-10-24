'use client'
import { useEffect, useState } from "react";
import { getRequests , deleteRequest, editRequests} from "../utilities/utils";

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


const useGetRequests = () => {
  const [requests, setRequests] = useState<Requests[]>([]);

  const fetchData = async () => {
    try {
      const fetchedRequests = await getRequests();
      setRequests(fetchedRequests);
    } catch (error) {
      console.error("Failed to fetch requests:", error);
    }
  };

  // Fetch data initially and then set up an interval to refresh it periodically
  useEffect(() => {
    fetchData(); // Fetch data initially

    // Set up an interval to fetch data every N seconds (e.g., every 60 seconds)
    const refreshInterval = setInterval(fetchData, 60000); // 60000 milliseconds = 60 seconds

    // Cleanup the interval when the component unmounts
    return () => {
      clearInterval(refreshInterval);
    };
  }, []);

  return { requests };
};

export default useGetRequests;











