import styled from "styled-components";

const theme = {
    color: {
      primary: 'black',
      secondary: 'red',
    },
  };
  

export const ListItem = styled.li`
    font-size: 1.5rem;
    color:${props => props.onSale ? theme.color.secondary : theme.color.primary};
    background-color:${props => props.onSale ? "black" : ""};
`;