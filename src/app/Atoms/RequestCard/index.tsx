import React from 'react';


interface Request {
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

const RequestCard = ({ request }: { request: Request }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4 relative mt-10">
      <div className="absolute top-1 right-0 p-2 text-lg ">
      {/* <p className={`text-sm ${request.status === 'confirmed' ? 'text-green-500' : 'text-orange-500'}`}>
      {request.status}
       </p> */}
      </div>
     <div>

      </div>
      <div className="flex ">
        <div className='flex '>
        {/* <img  src='/images/phone8.jpeg' alt={request.ewaste_type} className="w-40 mb-4" /> */}
          <div className='flex gap-36'>
            <p className="text-gray-500 text-m">
              <h1 className='mb-2 text-gray-500 font-bold'>Requester</h1>
              {request.requester}</p>
            <p className="text-gray-500 text-m">
              <h1 className='mb-2 text-gray-500 font-bold '>E-waste Type</h1>
               {request.ewaste_type}</p>


            <p className="text-gray-500 ">
              <h1 className='mb-2 text-gray-500 font-bold'>Location</h1>
             <p className='mb-6'>{request.location}</p>
             </p>
            <p className='mb-2 text-gray-500 font-bold'>
              <h1>QTY:</h1>
              {request.quantity}</p>


            <p className="text-gray-500 text-m">
            <h1 className='mb-2 text-gray-500 font-bold '>Status</h1>
            {request.status}</p>
            <p className="text-gray-500 text-m">
              <h1 className='mb-2 text-gray-500 font-bold '>Payment</h1>
              {request.payment_status}
              </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default RequestCard;
