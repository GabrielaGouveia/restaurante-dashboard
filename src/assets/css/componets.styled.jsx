import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { theme } from './style';
import { Row, Space} from 'antd';


export const NavbarLogo = styled.img`
    max-width: 100px;
    max-height: 100px;

`
export const NavbarLogoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
`
export const PageTitleStyle = styled.h1`
    font-size: ${theme.fontSize.largeTitle};
    font-weight: bold;
    color: ${theme.colors.primary};
`

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`


export const SpacerStyled = styled(Space)`
    margin: 0 20px;
`
export const CardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
   
`

export const CardStyle = styled.div`
    min-width: 200px;
    padding: 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.default};
    border-radius: 10px;
    
   `
export const CardTitle = styled.h2`

    font-size: 22px;
    font-weight: bold;
    color: ${theme.colors.primary};
    margin: 0;
    padding: 0;
`

export const CardSubtitle = styled.h3`
    font-size: 14px;
    font-weight: 500;
    color: ${theme.colors.primary};
    margin: 0;
    padding: 0;
`

export const CardBody= styled.div`
    display: flex;
    flex-direction: column;
    justify-content: row;
    align-items: center;
`

export const ColumnContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 10px;
   
`

export const LeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-right: 40px;
    
`

export const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-left: 40px;
`

export const SectionContainer = styled.div`
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: ${theme.colors.default};
    border-radius: 10px;
    box-shadow: 0 0 10px -5px rgba(0, 0, 0, 0.05);
    width: 100%;
    
`

// export const TableContainer = styled.div`
//     display: grid;
//     max-width: 800px;
//     grid-template-columns: repeat(3, 1fr);
// `

export const SectionBody = styled.div`
    width: 100%;
`


export const SectionRow = styled(Row)`
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
`



