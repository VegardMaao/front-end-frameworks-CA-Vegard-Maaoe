import { useGetAPI } from "api/index.js";
import { Link } from "react-router-dom";
import { featuredItemStyles } from "styles";


export function FeaturedItem({url}){

    const {data, isLoading, isError} = useGetAPI(url);
    let topResult;

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
    topResult = sortedArr[0];
    console.log(topResult);
    // const {description, discountedPrice, image, price, rating, reviews, tags, title } = topResult;

    if (isLoading) {
      return <div>Loading post</div>;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }

    return <featuredItemStyles.FeaturedItemWrapper >
        <div >
            {/* <h1>{title}</h1>
            <p>{description}</p>
            <p>{discountedPrice ? `On discount ${discountedPrice}` : price}</p> */}
        </div>
        <h2>Shop:</h2>
        </featuredItemStyles.FeaturedItemWrapper>
}