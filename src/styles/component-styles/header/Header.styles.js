import styled from "styled-components";
import { device } from "../../BreakPoints";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

export const NavbarWrapper = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3 rem;
    position: relative;
    background: ${theme.color.offwhite};

    .logoWrapper{
    height: 60px;
    align-self: start;
    margin: 0;
    }

    .active{
        background: ${theme.color.deepblue};
        color: ${theme.color.orange};
    }

    @media(${device.sm}){
    flex-direction: column;
    padding: 1rem;
    }

`;

export const NavLinkWrapper = styled.div`
    transition: 0.5s;
    @media(${device.sm}){
    position: fixed;
    top: ${(props) => props.showOnMobile ? "0px" : "-600px"};
    background: ${theme.color.offwhite};
    text-align: center;
    padding: 2rem 100vw;
    }
`;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: ${theme.color.deepblue};
    margin-left: 2rem;
    padding: 10px;
    border-radius: 25px;
    &: last-child {
    margin-right: 20px;
    }

    &: hover {
        background: ${theme.color.deepblue};
        color: ${theme.color.orange};
    }

    @media(${device.sm}){
    display: block; 
    margin: 2rem auto;
    }
`;


export const StyledLogo = styled.img`
    position: relative;
    z-index: 1;
    width: 150px;
`;  

export const styledHamburgerIcon = styled.div`
    z-index: 1;
    display: none;
    position: absolute;
    right: 20px;
    top: 21px;

    i{
        pointer: cursor;
        font-size: 1.8rem;
    }

    @media(${device.sm}){
    display: block;
    }
`;