import React, {useState} from 'react';


interface PaymentItemProps {
  id: number;
  ewaste_type: string;
  quantity: number;
  image: string;
  status: string;
  payment_status: string;
  onPayClick: (id: number) => void;

}

const PaymentItem: React.FC<PaymentItemProps> = ({
  id,
  ewaste_type,
  quantity,
  image,
  status,
  payment_status,

}) => {

  const [isActive, setIsActive] = useState(false);


  return (
    <div className='w-full justify-center ml-10 mr-10'>
      <div className="bg-white border rounded-lg p-4 flex justify-between items-center">
        <div className='flex items-center justfy-center'>
          <img src='/images/phone5.jpeg' alt={ewaste_type} className="w-24 h-24 object-cover mr-4" />
          <div>
            <h2 className="text-xl font-semibold ml-20">{ewaste_type}</h2>
            <p className="text-gray-500 ml-20">Quantity: {quantity}</p>
          </div>
        </div>

        <div>
          <p className="text-gray-500">Amount: KSH 300</p>
          <p className={`text-${payment_status === 'paid' ? 'green' : 'red'}-500`}>
            {payment_status}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentItem;



