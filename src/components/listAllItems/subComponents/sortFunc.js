import * as sortings from "../../sortingArray/sortingArray";

export function sortFunc(e, params) {
    const sortBy = e.target.value;
    const {data, setDataArray} = params;

    const sortedArr = data.sort(sortings.sortByReviews);
    setDataArray(sortedArr);

    console.log(data)

    // let sortedArr;
    
    // console.log(sortBy);
    // console.log(data)

    // switch (sortBy) {
    //     case "default":
    //         break;
        
    //     case "popular":
    //         console.log(data[0]);
    //         const sortedArr = data.sort(sortings.sortByReviews);
    //         console.log(sortedArr[0]);
    //         setDataArray(sortedArr);
    //         console.log(data[0]);
    //         break;

    //     case "expensive":
    //         console.log("expensive");
    //         break;

    //     case "cheap":
    //         console.log("cheap");
    //         break;
        
    //     case "newest":
    //         console.log("new")
    //         break;

    //     case "oldest":
    //         console.log("old")
    //         break;

    //     default:
    //         break;
    // }
}