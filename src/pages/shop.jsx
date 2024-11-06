import { useState, useEffect } from "react";
import { useGetAPI } from "../api/index.js";
import {  Link } from "react-router-dom";
import * as S from "../App.styles.js";

export default function Shop() {
  const url = `https://v2.api.noroff.dev/online-shop`;
  const {data, isLoading, isError} = useGetAPI(url);

  if (isLoading) {
            return <div>Loading posts</div>;
          }
        
          if (isError) {
            return <div>Error loading data</div>;
          }
    
        return <div>
            <h1>Shop:</h1>
                {data.map((item) => (
                  <Link to={`/singleItem?id=${item.id}`}>
                    <S.ShopItem key={item.id}>
                        <S.Thumbnail src={item.image.url} alt={item.image.alt}/>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </S.ShopItem>
                  </Link>
                ))}
        </div>  
};