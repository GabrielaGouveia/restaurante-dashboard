import React, { useState }from 'react'
import { Table } from 'antd';
import menuData from '../../data/Menu.json'
import { Button, Space } from 'antd';
import { PageContainer,SpacerStyled } from '../../assets/css/componets.styled';

export const Menu = () => {
  const [data, setData] = useState(menuData);
  const [tableParams, setTableParams] = useState({
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const columns = [
    {
      title: 'Nome',
      dataIndex: 'name',
      
      width: '20%',
    },
    {
      title: 'Preço',
      dataIndex: 'price',
    },
    {
      title: 'Categoria',
      dataIndex: 'type',
      filters: [
        {
          text: 'Prato Principal',
          value: 'mainDishe',
        },
        {
          text: 'Entrada',
          value: 'starter',
        },
        {
          text: 'Sobremesa',
          value: 'dessert',
        },
      ],
      width: '20%',
    },
    {
      title: 'Descrição',
      dataIndex: 'description',
    },
  ];
  const handleTableChange = (pagination, filters, sorter) => {
    setTableParams({
      pagination,
      filters,
      ...sorter,
    });
    if (pagination.pageSize !== tableParams.pagination?.pageSize) {
      setData([]);
    }
  };

  data.forEach((item) => console.log(item.id));
  
  return (
    <PageContainer>
      
      <Table
        columns={columns}
        rowKey={(record) => record.id}
        dataSource={data}
        pagination={tableParams.pagination}
        onChange={handleTableChange}
    />
      <SpacerStyled wrap direction="vertical">
        <Button type="primary">Adicionar</Button>
        <Button type="primary">Editar</Button>
        <Button type="primary">Excluir</Button>
      </SpacerStyled>
    </PageContainer>
   
  )
}