import styled from "styled-components";

export const ShopWrapper = styled.div`

`;

export const ShopItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 2px solid black;
    max-width: 300px;
    margin: auto;
    margin-bottom: 20px;
    padding: 10px;
`;

export const Thumbnail = styled.img`
  max-height: 100px;
  max-width: 100px; 
  align-self: center;
`;

export const ItemTitle = styled.h2`
    font-size: 1.3rem;
`;

export const ItemDescription = styled.p`
    max-width: 75%;
`;