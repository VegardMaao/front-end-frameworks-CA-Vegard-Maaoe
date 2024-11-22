import styled from "styled-components";
import { theme } from "../../theme";

export const ButtonComponent = styled.button`
    background-color: ${({ type }) => backgroundColors[type]};
    padding: 15px;
    border: 1px solid ${({type}) => fontColors[type]};
    border-radius: 30px;
    color: ${({type}) => fontColors[type]};
    font-size: 1.1rem;
    font-weight: 500;

        :hover {
            background-color: ${({ type }) => hoverBgColors[type]};
            color: ${({ type }) => hoverFontColors[type]};
            border: 2px solid ${({type}) => hoverFontColors[type]};
            cursor: pointer;
        }
`;

const fontColors = {
  primary: theme.color.orange,
  inverted: theme.color.deepblue
}

const hoverFontColors = {
  primary: theme.color.deepblue,
  inverted: theme.color.orange  
}

const backgroundColors = {
    primary: theme.color.deepblue,
    inverted: theme.color.orange
  };
  
  const hoverBgColors = {
    primary: theme.color.orange,
    inverted: theme.color.deepblue
  };