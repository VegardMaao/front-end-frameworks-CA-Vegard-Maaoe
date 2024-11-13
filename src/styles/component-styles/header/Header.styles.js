import styled from "styled-components";
// import { device } from "../../BreakPoints";
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
    }

    .active{
        background: ${theme.color.deepblue};
        color: ${theme.color.orange};
    }
`;

export const NavLinkWrapper = styled.div``;

export const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    transition: .2s;
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
`;


export const StyledLogo = styled.img`
    width: 150px;
`;  