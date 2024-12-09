import { DisplayPrice } from "../../featuredItem/subComponents/displayPrice";
import { buttons, shopStyles } from "styles";

export function ListItemsInCheckout(params) {

    const {items, removeItem} = params;
    
    return items.map((item) => (
        <shopStyles.ShopItem key={item.id}>
            <shopStyles.Thumbnail src={item.image.url} alt={item.image.alt}/>
          <shopStyles.ItemTitle>{item.title}</shopStyles.ItemTitle>
          <shopStyles.ItemDescription>{item.description}</shopStyles.ItemDescription>
          <DisplayPrice color="deepblue" discountedPrice={item.discountedPrice} regularPrice={item.price}/>
          <buttons.ButtonComponent onClick={() => {removeItem(item.id)}}>Remove</buttons.ButtonComponent>
        </shopStyles.ShopItem>
    ))
}