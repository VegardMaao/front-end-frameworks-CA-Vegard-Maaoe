import { useGetAPI } from "api/index.js";
import { Link } from "react-router-dom";
import {ShopItem, Thumbnail} from "../../App.styles";
import { buttons } from "styles";


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
          <ShopItem>
            <Link key={item.id} to={`shop/${item.id}`}>
              <Thumbnail src={item.image.url} alt={item.image.alt}/>
            </Link>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <Link key={item.id} to={`shop/${item.id}`}>
                <buttons.ButtonComponent type="inverted">See product</buttons.ButtonComponent>
            </Link>
          </ShopItem>
      ))}
    </div>
}