import { useGetAPI } from "../../api/index.js";
import { Link, useLocation } from "react-router-dom";
import * as S from "../../App.styles.js";


export default function ListAllItems() {
  const allItemsUrl = "https://v2.api.noroff.dev/online-shop";
  const {data, isLoading, isError} = useGetAPI(allItemsUrl);
  const { pathname } = useLocation();

    if (isLoading) {
      return <div>Loading posts</div>;
    }
        
    if (isError) {
      return <div>Error loading data</div>;
    }

    return <div>
        {data.map((item) => (
        <Link key={item.id} to={`${pathname}/${item.id}`}>
          <S.ShopItem>
              <S.Thumbnail src={item.image.url} alt={item.image.alt}/>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
          </S.ShopItem>
        </Link>
      ))}
    </div>
}