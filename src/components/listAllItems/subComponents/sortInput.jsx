import { sortInputStyles } from "styles";
import { sortFunc } from "./sortFunc";
import { useEffect } from "react";

export function SortInp(params) {
    const {data, setDataArray} = params;
    useEffect(() => {
        setDataArray(data);
        }, []);
    return <sortInputStyles.InputWrapper>
            <sortInputStyles.SelectElem name="sortBy" id="sortBy" onChange={(e)=>{sortFunc(e, params)}}>
                <option value="default">Default</option>
                <option value="popular">Most Popular</option>
                <option value="expensive">Most expensive</option>
                <option value="cheap">Least expensive</option>
            </sortInputStyles.SelectElem>
    </sortInputStyles.InputWrapper>
}