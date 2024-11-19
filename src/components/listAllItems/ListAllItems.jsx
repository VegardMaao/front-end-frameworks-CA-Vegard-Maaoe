import { useGetAPI } from "api/index.js";
import { Link } from "react-router-dom";
import {ShopItem, Thumbnail} from "../../App.styles";


export function ListAllItems({url}) {
  
  const {data, isLoading, isError} = useGetAPI(url);

    if (isLoading) {
      return <div>Loading posts</div>;
    }
        
    if (isError) {
      return <div>Error loading data</div>;
    }

    return <div>
        {data.map((item) => (
        <Link key={item.id} to={`shop/${item.id}`}>
          <ShopItem>
              <Thumbnail src={item.image.url} alt={item.image.alt}/>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
          </ShopItem>
        </Link>
      ))}
    </div>
}