import { useGetAPI } from "api/index.js";
import { Link } from "react-router-dom";
import { featuredItemStyles } from "styles";


export function FeaturedItem({url}){

    const {data, isLoading, isError} = useGetAPI(url);

    function sortByReviews(a, b){
        if (a. rating > b.rating || a.reviews.length > b.reviews.length) {
            return -1;
        }
        if (a.rating < b.rating || a.reviews.length < b.reviews.length){
            return 1;
        }
        return 0;
    }

    const sortedByReviews = data.sort(sortByReviews);
    const featuredItemDAta = sortedByReviews.shift();
    console.log(featuredItemDAta)

    if (isLoading) {
      return <div>Loading post</div>;
    }
        
    if (isError) {
      return <div>Error loading data</div>;
    }

    return <featuredItemStyles.FeaturedItemWrapper > 
        <div>
            <h1>Featured item which will be dynamic</h1>
        </div>
        <h2>Shop:</h2>
        </featuredItemStyles.FeaturedItemWrapper>
} 