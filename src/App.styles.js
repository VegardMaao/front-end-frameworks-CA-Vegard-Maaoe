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

export const Thumbnail = styled.img`
  max-height: 100px;
  max-width: 100px; 
  align-self: center;
`;

export const ShopItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    max-width: 350px;
    margin: auto;
    margin-bottom: 20px;
    padding: 10px;
`;

export const ContactForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    max-width: 350px;
    margin: auto;
    padding: 10px;
`;