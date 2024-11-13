import styled from "styled-components";
import { device } from "../BreakPoints";

const StyledHeader = styled.header`
    nav{
    display: flex;
    flex-direction: row;
    
        i{
            font-size: 2rem;
            margin: 10px
        }

        ul{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            width: 90vw;
            list-style: none;
            margin: auto;
            padding: 1rem;
            align-items: center;

            @media ${device.sm}{
                        
            }
    }
`;

export default StyledHeader;