import * as sortings from "../../sortingArray/sortingArray";

export function sortFunc(e, params) {
    const sortBy = e.target.value;
    const {data, setDataArray} = params;
    let sortedArr;

    switch (sortBy) {
        case "default":
            setDataArray(data);
            break;
        
        case "popular":
            sortedArr = [].concat(data).sort(sortings.sortByReviews);
            setDataArray(sortedArr);
            break;

        case "expensive":
            sortedArr = [].concat(data).sort(sortings.sortByPrice);
            setDataArray(sortedArr);
            break;

        case "cheap":
            console.log("cheap");
            break;
        
        case "newest":
            console.log("new")
            break;

        case "oldest":
            console.log("old")
            break;

        default:
            break;
    }
}