'use client'
import React, { useState } from "react";
import useGetRequests from "../hooks/useGetRequests";
import RequestCard from "../Atoms/RequestCard";
import Layout from "../Components/Layout";
import TopNav from "../Components/TopNav";

const CollectionRequest = () => {
  const { requests} = useGetRequests();

  const [filter, setFilter] = useState("all");


  const filteredRequests = requests.filter((request) => {
    if (filter === "all") {
      return true;
    } else if (filter === "Pending") {
      return request.status === "Pending";
    } else if (filter === "Completed") {
      return request.status === "Completed";
    } else if (filter === "Processing") {
      return request.status === "Processing";
    }
  });

  return (
    <div>
      <Layout>
        <TopNav />
        <div className="ml-10 mr-10">
          <h1 className="mt-6 text-3xl">Requests</h1>
          <div className="flex space-x-36 mt-8 text-xl">
            <button
              onClick={() => setFilter("all")}
              className={`${
                filter === "all" ? "border-b-4 border-green-500" : ""
              }`}
            >
              All Requests
            </button>
            <button
              onClick={() => setFilter("Pending")}
              className={`${
                filter === "Pending" ? "border-b-4 border-green-500" : ""
              }`}
            >
              Pending Requests
            </button>
            <button
              onClick={() => setFilter("Completed")}
              className={`${
                filter === "Completed" ? "border-b-4 border-green-500" : ""
              }`}

            >
              Completed Requests
            </button>
            <button
              onClick={() => setFilter("Processing")}
              className={`${
                filter === "Processing" ? "border-b-4 border-green-500" : ""
              }`}
            >
              Processing Requests
            </button>
          </div>
          <ul>
            {filteredRequests.map((request) => (
              <li key={request.id}>
                <RequestCard request={request} />
              </li>
            ))}
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default CollectionRequest;

