import { featuredItemStyles } from "styles";
import { useParams } from "react-router-dom";

export function DisplayPrice(priceInfo) {
    const { id } = useParams();
    const {discountedPrice, regularPrice} = priceInfo;
    if (discountedPrice) {
        return <featuredItemStyles.FeaturedParagraph colors={!id ? "white" : "deepblue"}>
            <featuredItemStyles.LineThrough>{regularPrice}</featuredItemStyles.LineThrough>
            {` On sale! ${discountedPrice}`}
        </featuredItemStyles.FeaturedParagraph>
    } else {
        return <featuredItemStyles.FeaturedParagraph colors={!id ? "white" : "deepblue"}>
            {regularPrice}
        </featuredItemStyles.FeaturedParagraph>
    }
};
