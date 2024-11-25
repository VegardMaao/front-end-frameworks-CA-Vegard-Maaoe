import styled from "styled-components";
import { theme } from "../../../theme";

export const SearchBar = styled.div`
    border: 2px solid ${theme.color.deepblue};
    border-radius: 25px;
    padding: 10px;

    i{
    font-size: 1.1rem;
    padding-right: 5px;
    margin-right: 5px;
    }
`;

export const SearchInp = styled.input`
    border: 0px;
    padding: 0px;
    margin: 0px;
    outline: none;
    font-size: 1rem;

    &:focus{
    border: 0px;
    padding: 0px;
    margin: 0px;
    outline: none;
    }
`;