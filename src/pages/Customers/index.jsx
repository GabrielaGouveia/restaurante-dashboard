import React from 'react'
import { PageTitle } from '../../components/PageTitle'
import { DynamicTable } from '../../components/DynamicTable'
import customersData from '../../data/Customers.json'
import { Input } from 'antd';

const { Search } = Input;

export const Customers = () => {
  console.log(customersData)
  const { columnsData, contentData } = customersData.customers
  const Style = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
  return (
    <>
      <div style={Style}>
        <PageTitle title="Clientes" />
        <Search
        placeholder="Buscar"
        allowClear
        onSearch={""}
        style={{
          width: 200,
        }}
      />
     </div>
      <DynamicTable columnsData={columnsData} contentData={contentData}/>
    </>
  )
}
