import { sortInputStyles } from "styles";
import { sortFunc } from "./sortFunc";
import { useEffect } from "react";

export function SortInp(params) {
    const {originalArray, setSortedArray} = params;
    useEffect(()=> {
        setSortedArray(originalArray);
    }, [])
    return <sortInputStyles.InputWrapper>
            <sortInputStyles.SelectElem name="sortBy" id="sortBy" onChange={(e)=>{sortFunc(e, params)}}>
                <option value="default">Recommended items</option>
                <option value="popular">Popular</option>
                <option value="expensive">Price high-low</option>
                <option value="cheap">Price low-high</option>
            </sortInputStyles.SelectElem>
    </sortInputStyles.InputWrapper>
}