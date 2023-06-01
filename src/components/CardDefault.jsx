import React from 'react'
import { CardStyle, CardSubtitle, CardTitle,CardBody } from '../assets/css/componets.styled'
export const CardDefault = ({title, subtitle, icon}) => {
  return (
    <CardStyle>
        <CardBody>
            <CardTitle>{title}</CardTitle>
            <CardSubtitle>{subtitle.toUpperCase()}</CardSubtitle>
        </CardBody>
        {icon ? ( <span>{icon}</span> ) : ( <></>)}
        <div>
           
        </div>
    </CardStyle>
  )
}