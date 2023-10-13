import React from 'react';
import Layout from '../Components/Layout';
import TopNav from '../Components/TopNav';
import BarChart from '../Components/BarChart';
import TopCards from '../Components/TopNavCards';
import RecentRequest from '../Components/Requests';


export default function Dashboard() {
  return (
    <>

        <Layout >
          <div>
            <TopNav/>
            <TopCards/>
            <BarChart />
            <RecentRequest />
          </div>
        </Layout>

    </>
  );
}