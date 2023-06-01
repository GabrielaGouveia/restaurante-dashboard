import React from 'react'
import { Tabs } from 'antd';
import { PageTitle } from '../../components/PageTitle'
import profitsData from '../../data/Profits.json'
import { CardDefault } from '../../components/CardDefault'
import { CardContainer } from '../../assets/css/componets.styled';
import { Chart } from '../../components/Chart';
import { Chart1 } from '../../components/Chart1';

export const Profits = () => {
  const onChange = (key) => {
    console.log(key);
  };
  const { daily, weekly, monthly, yearly } = profitsData
  

  const dataArray = (data) =>{
    return(
    
      <CardContainer>
        <CardDefault title={data.total} subtitle="Total Ganho" key={data.id}/>
        <CardDefault title={data.local} subtitle="ganho local" key={data.id}/>
        <CardDefault title={data.annual} subtitle="ganho delivery" key={data.id}/>
      </CardContainer>
      
    )
    
      
  }

 
  const items = [
    {
      key: '1',
      label: `Diário`,
      children: dataArray(daily),
    },
    {
      key: '2',
      label: `Semanal`,
      children: dataArray(weekly),
    },
    {
      key: '3',
      label: `Mensal`,
      children: dataArray(monthly),
    },
    {
      key: '4',
      label: `Anual`,
      children: dataArray(yearly),
    },
    
  ];

  
  return (
    <>
    <PageTitle title="Faturamento"/>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    <Chart/>
   </>
  )
}