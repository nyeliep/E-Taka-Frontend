'use client'
import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor: string;
    backgroundColor: string;
  }[];
}


const BarChart = () => {
  const [chartData, setChartData] = useState<ChartData>({
    labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Sales $',
        data: [500, 200, 1000, 1500, 2500, 3000, 2000],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: '#007F56',
      },
    ],
  });
  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'],
      datasets: [
        {
          label: 'expenditure',
          data: [3000, 1200, 3000, 2500, 2000, 1500, 1000],
          borderColor: 'rgb(53, 162, 235)',
          backgroundColor: '#007F56',
        },
      ]
    })
    setChartOptions({
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Daily Expenditure'
        }
      },
      maintainAspectRatio: false,
      responsive: true
    })
  }, [])

  return (

    <div className=' md:col-span-2 relative lg:h-[70vh] h-[50vh]  p-4 border rounded-lg bg-transparent ml-20 mr-20'>
      <Bar data={chartData} options={chartOptions} />
    </div>

  );
};

export default BarChart;
