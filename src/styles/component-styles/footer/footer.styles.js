import styled from "styled-components";
import { device } from "../../BreakPoints";
import { NavLink } from "react-router-dom";
import { theme } from "../../theme";

const FooterWrapper = styled.footer`
    position: fixed;
    height: 150px;
    background-color: ${theme.color.offwhite};
    bottom: 0px;
    left: 0px;
    right: 0px;
    margin-bottom: 0px;
`;

export {FooterWrapper};