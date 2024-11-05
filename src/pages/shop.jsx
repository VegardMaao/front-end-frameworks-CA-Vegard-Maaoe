import { useState, useEffect } from "react";
import {  Link } from "react-router-dom";
import * as S from "../App.styles.js";

export default function Shop() {
    const url = `https://v2.api.noroff.dev/online-shop`;

    const [shopItems, setShopItems] = useState([]);

      // State for holding our loading state
    const [isLoading, setIsLoading] = useState(false);
    // State for holding our error state
    const [isError, setIsError] = useState(false);

    useEffect(() => { 
        async function getData() {
            try {
                setIsError(false);   
                setIsLoading(true); 
                const response = await fetch(url);
                const json = await response.json();
                setShopItems(json.data);
                setIsLoading(false);
            } catch (error) {
                setIsLoading(false);
                setIsError(true);
            }
        }
        getData();
     }, [])

     if (isLoading) {
        return <div>Loading posts</div>;
      }
    
      if (isError) {
        return <div>Error loading data</div>;
      }

    console.log(shopItems);

    return <div>
        <h1>Shop:</h1>
            {shopItems.map((item) => (
                <S.ShopItem key={item.id}>
                    <Link to={`/singleItem?id=${item.id}`}>
                    <S.Thumbnail src={item.image.url} alt={item.image.alt}/>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                    </Link>
                </S.ShopItem>
            ))}
    </div>
  }
  
