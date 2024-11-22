import { useGetAPI } from "api/index.js";
import { Link } from "react-router-dom";
import { buttons, shopStyles, loadingStyle } from "styles";


export function ListAllItems({url}) {
  
  const {data, isLoading, isError} = useGetAPI(url);

    if (isLoading) {
      return <loadingStyle.Loader />;
    }
        
    if (isError) {
      return <div>Error loading data</div>;
    }

    return <shopStyles.ShopWrapper>
        {data.map((item) => (
          <shopStyles.ShopItem key={item.id}>
            <Link to={`shop/${item.id}`}>
              <shopStyles.Thumbnail src={item.image.url} alt={item.image.alt}/>
            </Link>
            <shopStyles.ItemTitle>{item.title}</shopStyles.ItemTitle>
            <shopStyles.ItemDescription>{item.description}</shopStyles.ItemDescription>
            <Link to={`shop/${item.id}`}>
                <buttons.ButtonComponent colors="inverted" size="small">See product</buttons.ButtonComponent>
            </Link>
          </shopStyles.ShopItem>
      ))}
    </shopStyles.ShopWrapper>
}