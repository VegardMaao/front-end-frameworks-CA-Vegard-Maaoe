import useCartStore from "../../stateStores/cartStore";
import { ListItemsInCheckout } from "./subComponents/listItemsInCheckout";
import { checkoutStyles } from "styles";
import { ShowTotal } from "./subComponents/showTotal";

export function CheckoutComponent() {
    const {items, getTotalPrice, removeItem, clearCart} = useCartStore();
    
    return <checkoutStyles.CheckoutWrapper>
        <checkoutStyles.ProductsWrapper>
             <ListItemsInCheckout items={items} removeItem={removeItem}/>
    </checkoutStyles.ProductsWrapper>
    <ShowTotal getTotalPrice={getTotalPrice}/>
    </checkoutStyles.CheckoutWrapper>
}