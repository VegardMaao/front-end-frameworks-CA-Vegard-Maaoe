import { useState, useEffect } from "react"

export default function Shop() {
    const url = `https://v2.api.noroff.dev/online-shop`;

    const [shopItems, setShopItems] = useState([]);

    useEffect(() => { 
        async function getData() {
            const response = await fetch(url);
            const json = await response.json();
            setShopItems(json.data);
        }
        getData();
     }, [])

    console.log(shopItems);

    return <div>
        <h1>Shop:</h1>
            {shopItems.map((item) => (
                <div key={item.id}>
                    <h2>{item.title}</h2>
                    <img src={item.image.url} alt={item.image.alt}/>
                    <p>{item.description}</p>
                </div>
            ))}
    </div>
  }
  
