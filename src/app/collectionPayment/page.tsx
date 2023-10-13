'use client'
import React, { useState } from 'react';
import PaymentItem from '../Atoms/PaymentAtom';
import Layout from '../Components/Layout';
import TopNav from '../Components/TopNav';
import useGetRequests from '../hooks/useGetRequests';

const Payment = () => {
  const [filter, setFilter] = useState('all');
  const { requests } = useGetRequests();

  const filteredPayments = requests.filter((payment) => {
    if (filter === 'unpaid') {
      return payment.payment_status === 'Unpaid';
    } else if (filter === 'paid') {
      return payment.payment_status === 'Paid';
    } else {
      return true;
    }
  });

  const handlePayment = (id:number) => {
    console.log(`Payment for item with ID ${id} has been processed.`);
    
  };

  return (
    <Layout>
      <TopNav />
      <div className="container mx-auto py-10 justify-center">
        <h1 className="text-3xl font-semibold mb-4 ml-20">My Wallet</h1>
        <div className="flex justify-end space-x-4 mb-4 mr-10">
          <button
            className={`toggle-button ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`toggle-button ${filter === 'unpaid' ? 'active' : ''}`}
            onClick={() => setFilter('unpaid')}
          >
            Unpaid
          </button>
          <button
            className={`toggle-button ${filter === 'paid' ? 'active' : ''}`}
            onClick={() => setFilter('paid')}
          >
            Paid
          </button>
        </div>
        <div className="flex flex-row flex-wrap -m-4">
          {filteredPayments.map((item) => (
            <PaymentItem
              key={item.id}
              id={item.id}
              ewaste_type={item.ewaste_type}
              quantity={item.quantity}
              image={item.image}
              status={item.status}
              payment_status={item.payment_status}
              onPayClick={(id) => handlePayment(id)}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Payment;

