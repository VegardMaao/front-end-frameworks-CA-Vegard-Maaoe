import styled from "styled-components";
import { theme } from "../../theme";

export const ButtonComponent = styled.button`
    background-color: ${({ colors }) => backgroundColors[colors]};
    padding: 15px;
    border: 1px solid ${({colors}) => fontColors[colors]};
    border-radius: 30px;
    color: ${({colors}) => fontColors[colors]};
    font-size: 1.1rem;
    font-weight: 500;

        :hover {
            background-color: ${({ colors }) => hoverBgColors[colors]};
            color: ${({ colors }) => hoverFontColors[colors]};
            border: 2px solid ${({colors}) => hoverFontColors[colors]};
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