import { featuredItemStyles } from "styles";

export function DisplayPrice(priceInfo) {
    const {discountedPrice, regularPrice} = priceInfo;
    if (discountedPrice) {
        return <featuredItemStyles.FeaturedParagraph>
            <featuredItemStyles.LineThrough>{regularPrice}</featuredItemStyles.LineThrough>
            {` On sale! ${discountedPrice}`}
        </featuredItemStyles.FeaturedParagraph>
    } else {
        return <featuredItemStyles.FeaturedParagraph>
            {regularPrice}
        </featuredItemStyles.FeaturedParagraph>
    }
};
