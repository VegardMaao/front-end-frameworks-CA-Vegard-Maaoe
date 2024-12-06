import * as sortings from "../../sortingArray/sortingArray";
import { resetInp } from "./resetInputs";

export function sortFunc(e, params) {
    const sortBy = e.target.value;
    const {originalArray, output, setOutput, setSortedArray} = params;
    let sortedArr;


    switch (sortBy) {
        case "default":
            sortedArr = originalArray;
            resetInp("sort")
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
            setSortedArray(originalArray);
            setOutput(originalArray);
            break;
    }
}