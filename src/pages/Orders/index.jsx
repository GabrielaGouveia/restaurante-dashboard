import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { CardContainer, ColumnContainer, LeftColumn, RightColumn } from '../../assets/css/componets.styled'
import { CardDefault } from '../../components/CardDefault'
import { DynamicTable } from '../../components/DynamicTable'
import  ordersData from '../../data/Orders.json'
import { Chart1 } from '../../components/Chart1'
export const Orders = () => {
  const { ordersCards, ordersHistory, bestSellingDishes } = ordersData
  console.log(bestSellingDishes)
  return (
    <>
    <PageTitle title="Pedidos" />
    <CardContainer>
      {ordersCards.map((card, index) => (
        <CardDefault key={index} title={card.title} subtitle={card.subtitle} icon={card.icon} />
      ))}
    </CardContainer>
    <ColumnContainer>
    <LeftColumn>
        <Chart1/>
      </LeftColumn>
      <RightColumn>
        <DynamicTable {...bestSellingDishes}/>
      </RightColumn>
    </ColumnContainer>
    <DynamicTable {...ordersHistory}/>
    </>
    
  
    
  )
}