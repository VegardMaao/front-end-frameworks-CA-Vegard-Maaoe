import { Link } from "react-router-dom";
import { buttons, shopStyles } from "styles";
import { DisplayPrice } from "../../featuredItem/subComponents/displayPrice";

export function ViewItems({data}){
      return <shopStyles.AllItemDiv>
        {data.map((item) => (
          <shopStyles.ShopItem key={item.id}>
            <Link to={`shop/${item.id}`}>
              <shopStyles.Thumbnail src={item.image.url} alt={item.image.alt}/>
            </Link>
            <shopStyles.ItemTitle>{item.title}</shopStyles.ItemTitle>
            <shopStyles.ItemDescription>{item.description}</shopStyles.ItemDescription>
            <DisplayPrice discountedPrice={item.discountedPrice} regularPrice={item.price}/>
            <Link to={`shop/${item.id}`}>
                <buttons.ButtonComponent colors="inverted" size="small">See product</buttons.ButtonComponent>
            </Link>
          </shopStyles.ShopItem>
      ))}
      </shopStyles.AllItemDiv>
}