import styled from "styled-components";

export const ShopWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const AllItemDiv = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const ShopItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    border: 2px solid black;
    width: 300px;
    height: 350px;
    margin: 20px;
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