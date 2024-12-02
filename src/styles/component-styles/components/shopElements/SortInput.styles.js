import styled from "styled-components";
import { theme } from "../../../theme";

export const InputWrapper = styled.div`
    border: 2px solid ${theme.color.deepblue};
    border-radius: 25px;
    padding: 10px;
`;

export const SelectElem = styled.select`
    border: 0px;
    padding: 0px;
    margin: 0px;
    outline: none;
    font-size: 1rem;
`;
