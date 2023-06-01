import React from 'react'
import { SectionBody, SectionContainer,SectionRow } from '../assets/css/componets.styled'
import { SectionTitle } from '../assets/css/style'
import { Avatar, Col, Row } from 'antd'
import { styled } from 'styled-components'

export const TableContent = ({ boardTitle, content }) => {
    
    const nameStyle = {
        margin: '0',
        padding: '0',
    }

  return (
    <SectionContainer>
        <SectionTitle>{boardTitle}</SectionTitle>
            <SectionBody>
            {content.map((item, index) => (
                <SectionRow key={index}>
                    {item.icon && 
                    <Col flex="50px">
                        <Avatar shape="square" size={40} icon={ <img src={item.icon} alt={item.title} />} />
                    </Col>
                    }
                    <Col flex="auto">
                        <p style={nameStyle}>{item.name}</p>
                        {item.price && <p style={nameStyle}>{item.price}</p>}
                    </Col>
                    <Col flex="100px">
                        <p>{item.orders}</p>
                    </Col>
                </SectionRow>
            
                ))}
            </SectionBody>
    </SectionContainer>
  )
}

