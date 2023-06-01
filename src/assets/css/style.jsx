import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


export const theme = {
    colors: {
        primary: "#000000",
        secondary: "#2C9AF9",
        tertiary: "rgb(0, 0, 0, 0.5)",
        default: "#FFFFFF",
    },
    fontSize:{
        largeTitle: "34px",
        title1: "28px",
        title2: "22px",
        headline: "17px",
        body: "17px",
        caption1: "12px",
        caption2: "11px",
    }
}

export const NavbarContainer = styled.nav`
    margin: 0;
    background-color: ${theme.colors.default};
    min-width: 180px;
    box-shadow: 10px 0 10px -5px rgba(0, 0, 0, 0.05);
   
`

export const NavbarItems = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;  
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`

export const NavbarOption = styled.li`

    display: block;
    margin: 10px 0;
    :hover{
        background-color: ${theme.colors.secondary};
        color: ${theme.colors.default};
    }
    
`

export const NavbarLink = styled(NavLink)`
    border-radius: 0 35px 0 0;
    display: block;
    padding: 10px 15px;
    text-decoration: none;
    color: ${theme.colors.tertiary};
    font-size: ${theme.fontSize.body};
    font-weight: bold;
`
export const NavbarLinkActive = styled(NavLink)`
    border-radius: 0 35px 0 0;
   
`

export const NavbarTitle = styled.h1`
    font-size: 20px;
    margin: 0 auto;
    padding: 0 auto;
    justify-content: center;
    height: 150px;
    display: flex;
    align-items: center;
   
`

export const PageContent = styled.div`
    width: 100%;
    padding: 20px 50px;
    margin: 0 auto;
   
`

export const SectionTitle = styled.h2`
    font-size: 18px;
    font-weight: 400;
    color: ${theme.colors.primary};
`

