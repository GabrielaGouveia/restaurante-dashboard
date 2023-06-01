
import React from 'react';
import { Space, Table, Tag } from 'antd';


export const DynamicTable = ({ tableTitle, columnsData, contentData }) => {

  const columns = columnsData.map(item => ({ 
      title: item.title,
      dataIndex: item.dataIndex, 
      key: item.key,
    }))
  
  const data = contentData.map((item,index) => ({ 
      ...item,
      key: index,
  })) 


return(
    <>
      {tableTitle ?? <h3>{tableTitle}</h3>}
      <Table columns={columns} dataSource={data} />
    </>
)
}