import styled from "styled-components";
import { device } from "../../BreakPoints";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

export const FooterWrapper = styled.footer`
    position: absoloute;
    min-height: 150px;
    background-color: ${theme.color.offwhite};
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-between;
`;

export const FooterContentWrapper = styled.div`
    display: flex;
    flex-direction: ${(props) => props.direction};
    max-width: 50vw;
    margin: auto 1rem;
`;

export const TextLink = styled(NavLink)`
    margin: 0.7rem 0rem;
    text-decoration: none;
    font-size: 1rem;
    color: ${theme.color.deepblue};
    border: none;

    @media(${device.sm}){
    font-size: 1.2rem;
    display: flex;
    flex-direction: row;
    }
`;

export const IconLink = styled(NavLink)`
    transition: 0.3s;
    font-size: 4rem;
    color: ${theme.color.deepblue};
    margin: auto 1rem;
    padding: 1rem;
    border-radius: 15px;

    &: hover{
    color: ${theme.color.orange};
    background: ${theme.color.deepblue};
    }
    
    @media${device.sm}{
    margin: auto 1rem;
    }
`;
