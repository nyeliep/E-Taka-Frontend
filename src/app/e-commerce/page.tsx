import React from 'react';
import EcommerceLayout from '../Components/EcommerceLayout';

import BarChart from '../Components/BarChart';
import TopCards from '../Components/TopNavCards';
import OrderPage from '../order/page';
export default function Dashboard() {
  return (
    <>
        <EcommerceLayout>
          <div>
            <TopCards/>
            <BarChart />
          </div>
        </EcommerceLayout>
    </>
  );
}
