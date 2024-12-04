import * as sortings from "../../sortingArray/sortingArray";

export function sortFunc(e, params) {
    const sortBy = e.target.value;
    const {output, setOutput, setSortedArray} = params;
    let sortedArr;


    switch (sortBy) {
        case "default":
            sortedArr = output;
            setSortedArray(sortedArr);
            setOutput(sortedArr);
            break;
        
        case "popular":
            sortedArr = [].concat(output).sort(sortings.sortByReviews);
            setSortedArray(sortedArr);
            setOutput(sortedArr);
            break;

        case "expensive":
            sortedArr = [].concat(output).sort(sortings.sortByHighPrice);
            setSortedArray(sortedArr);
            setOutput(sortedArr);
            break;

        case "cheap":
            sortedArr = [].concat(output).sort(sortings.sortByLowPrice);
            setSortedArray(sortedArr);
            setOutput(sortedArr);
            break;

        default:
            setSortedArray(output);
            setOutput(output);
            break;
    }
}