import { searchBarStyles } from "styles";
import { SearchFunc } from "./searchFunc";
import { useEffect } from "react";

export function Searchbar(params){
    const {data, setDataArray} = params;
    useEffect(() => {
    setDataArray(data);
    }, []);
    
    return <searchBarStyles.SearchBar>
    <label htmlFor="searchInp"><i className="fa-solid fa-magnifying-glass"></i></label>
    <searchBarStyles.SearchInp type="text" name="searchInp" id="searchInp" placeholder="Search" onKeyUp={(e)=>{SearchFunc(e, params)}}/> 
    </searchBarStyles.SearchBar>
}