import { featuredItemStyles } from "styles";
import { DisplayPrice } from "./displayPrice";
import { buttons } from "styles";
import { Link } from "react-router-dom";
import { sortByReviews } from "../../sortingArray/sortingArray";
import useCartStore from "../../../stateStores/cartStore";

export function DataToComponent({data}) {
    const addItem = useCartStore(state => state.addItem);
    const {items} =useCartStore();
    
    const sortedArr = data.sort(sortByReviews);
    let topResult = sortedArr[0];
    const {description, discountedPrice, id, image, price, title } = topResult || {};
    
    const {url, alt} = image || {};

    return <featuredItemStyles.FeaturedItemWrapper url={url} alt={alt}>
            <featuredItemStyles.FeaturedInfoDiv>
                <featuredItemStyles.FeaturedHeader colors="white">{title}</featuredItemStyles.FeaturedHeader>
                    <featuredItemStyles.FeaturedParagraph colors="white">{description}</featuredItemStyles.FeaturedParagraph>
                        <DisplayPrice color="white" discountedPrice={discountedPrice} regularPrice={price}/>
                    <Link to={`/shop/${id}`}>
                        <buttons.ButtonComponent colors="primary" size="big" >See Product</buttons.ButtonComponent>
                    </Link>
                    <buttons.ButtonComponent colors="inverted" size="big" onClick={() => {addItem(topResult)}}>Add to cart</buttons.ButtonComponent>
                </featuredItemStyles.FeaturedInfoDiv>
        </featuredItemStyles.FeaturedItemWrapper>
}
