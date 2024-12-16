import styled from "styled-components";
import { device } from "../../../BreakPoints";

export const ShopWrapper = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const SearchAndSort = styled.div`
    display: flex;
    width: 600px;
    max-width: 100%;
    height: 125px;
    justify-content: space-around;
    align-items: center;

    @media${device.sm}{
    flex-direction: column;
    }
`;

export const AllItemDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
    grid-gap: .5rem;
    align-items: start;
    width: 70vw;
    margin: 0px;
`;

export const ShopItem = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    border: 2px solid black;
    width: 300px;
    height: 400px;
    margin: 20px;
    padding: 10px;
    max-width: fit-content;
    align-items: end;
    justify-items: center;

    a{
    align-self: center;
    }
`;

export const Thumbnail = styled.img`
  max-height: 100px;
  max-width: 100px; 
`;

export const ItemTitle = styled.h2`
    font-size: 1.3rem;
`;

export const ItemDescription = styled.p`
    max-width: 75%;
    max-height: 50px;
    overflow: hidden;
`;