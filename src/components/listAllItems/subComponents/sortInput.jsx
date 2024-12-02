import { sortInputStyles } from "styles";
import { sortFunc } from "./sortFunc";
import { useId } from "react";
import { useEffect } from "react";

export function SortInp(params) {
    const sortBy = useId();

    return <sortInputStyles.InputWrapper>
        <label htmlFor={sortBy}>
        <i class="fa-solid fa-sort"></i>
        
            <sortInputStyles.SelectElem name="sortBy" id={sortBy} onChange={(e)=>{sortFunc(e, params)}}>
                <option value="default">Default</option>
                <option value="popular">Most Popular</option>
                <option value="expensive">Most expensive</option>
                <option value="cheap">Least expensive</option>
            </sortInputStyles.SelectElem>
        </label>
    </sortInputStyles.InputWrapper>
}