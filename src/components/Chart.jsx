import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
    padding: 20
    
  
      
    
    
}
};


const data = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun','Jul','Agos','Set','Out','Nov','Dez'],
    datasets: [
      {
        label: 'FATURAMENTO 2023 - (Total:R$200,460)', 
        data: [12, 40, 19, 54, 22,18,12,50,48,32,15,34],
        backgroundColor: '#2C9AF9',
      },
    ],
  };

export const Chart = ()=> {
  return <Bar options={options} data={data} />;
}
