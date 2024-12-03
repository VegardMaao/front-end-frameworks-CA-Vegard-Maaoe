import { featuredItemStyles } from "styles";
import { useParams } from "react-router-dom";

export function DisplayPrice(params) {
    const { id } = useParams();
    const {color, discountedPrice, regularPrice} = params;
    console.log(color)
    if (discountedPrice && discountedPrice != regularPrice) {
        return <featuredItemStyles.FeaturedParagraph colors={color}>
            <featuredItemStyles.LineThrough>{regularPrice}</featuredItemStyles.LineThrough>
            {` On sale! ${discountedPrice}`}
        </featuredItemStyles.FeaturedParagraph>
    } else {
        return <featuredItemStyles.FeaturedParagraph colors={color}>
            {regularPrice}
        </featuredItemStyles.FeaturedParagraph>
    }
};
