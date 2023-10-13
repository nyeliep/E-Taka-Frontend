import React from 'react';
import EcommerceLayout from '../Components/EcommerceLayout';
import TopNav from '../Components/TopNav';
import BarChart from '../Components/BarChart';
import TopCards from '../Components/TopNavCards';
import OrderPage from '../order/page';
export default function Dashboard() {
  return (
    <>
        <EcommerceLayout>
          <div>
            <TopNav/>
            <TopCards/>
            <BarChart />
          </div>
        </EcommerceLayout>
    </>
  );
}
