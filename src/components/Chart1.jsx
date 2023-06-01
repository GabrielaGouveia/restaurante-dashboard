import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Delivery 35%', 'Local 65%'],
  datasets: [
    {
      label: '# of Votes',
      data: [35, 65],
      backgroundColor: [
        'rgba(54, 162, 235, 1)',
        '#2455af',
        
        
      ],
      
      
    },
    

  ],
};

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
     
    },
  },
  layout: {
    padding: 160
    
}
};


export const Chart1 = ()=> {
  return  <Doughnut options={options} data={data} />;
}
