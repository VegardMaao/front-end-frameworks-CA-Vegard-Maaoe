import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../BreakPoints";
import { theme } from "../../theme";

export const FooterWrapper = styled.footer`
    position: absoloute;
    min-height: 150px;
    max-width: 100vw;
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
    justify-content: space-evenly;
    width: 50vw;
    margin: auto;
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
    font-size: 3rem;
    color: ${theme.color.deepblue};
    padding: 1rem;
    border-radius: 15px;

    &: hover{
    color: ${theme.color.orange};
    background: ${theme.color.deepblue};
    }
`;
