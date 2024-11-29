import { featuredItemStyles } from "styles";
import { DisplayPrice } from "./displayPrice";
import { buttons } from "styles";
import { Link } from "react-router-dom";

export function DataToComponent({data}) {

    function sortByReviews(a, b){
        if (a.reviews.length > b.reviews.length || a.rating > b.rating) {
            return -1;
        }
        if (a.reviews.length < b.reviews.length || a.rating < b.rating){
            return 1;
        }
        return 0;
    }

    const sortedArr = data.sort(sortByReviews);
    let topResult = sortedArr[0];
    const {description, discountedPrice, id, image, price, title } = topResult || {};
    
    const {url, alt} = image || {};

    return <featuredItemStyles.FeaturedItemWrapper url={url} alt={alt}>
            <featuredItemStyles.FeaturedHeader colors="white">{title}</featuredItemStyles.FeaturedHeader>
                <featuredItemStyles.FeaturedParagraph colors="white">{description}</featuredItemStyles.FeaturedParagraph>
                    <DisplayPrice discountedPrice={discountedPrice} regularPrice={price}/>
                <Link to={`/shop/${id}`}>
                    <buttons.ButtonComponent colors="primary" size="big">Buy now</buttons.ButtonComponent>
                </Link>
        </featuredItemStyles.FeaturedItemWrapper>
}
