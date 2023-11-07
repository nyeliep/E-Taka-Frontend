import React from 'react';
import Layout from '../Components/Layout';
import BarChart from '../Components/BarChart';
import TopCards from '../Components/TopNavCards';
import RecentRequest from '../Components/Requests';


export default function Dashboard() {
  return (
    <>

        <Layout >
          <div>
            <TopCards/>
            <BarChart />
            <RecentRequest />
          </div>
        </Layout>

    </>
  );
}