import axios from 'axios';

export default async function handler(req:any, res:any) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const { token } = req.body;

  const headers = {
    Authorization: `Bearer ${token}`
  };

  // Set up your payment request parameters here
  const paymentData = {
    // ... your payment data
  };

  try {
    const response = await axios.post('https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest', paymentData, { headers });
    res.status(200).json(response.data);
  } catch (error:any) {
    res.status(error.response?.status || 500).json(error.response?.data || {});
  }
}