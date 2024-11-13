import styled from "styled-components";
import { device } from "../BreakPoints";

const StyledHeader = styled.header`
    ${console.log(device[0])}
    nav{
    display: flex;
    flex-direction: row;

        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 90vw;
            list-style: none;
            margin: auto;
            padding: 1rem;
    }
`;

export default StyledHeader;