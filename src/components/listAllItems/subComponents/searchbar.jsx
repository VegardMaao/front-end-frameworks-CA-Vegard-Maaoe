import { searchBarStyles } from "styles";
import { SearchFunc } from "./searchFunc";
import { useEffect } from "react";

export function Searchbar(params){
    const {data, setDataArray} = params;
    useEffect(() => {
    setDataArray(data);
    }, [])
    
    return <searchBarStyles.SearchBar>
    <i className="fa-solid fa-magnifying-glass"></i>
    <searchBarStyles.SearchInp type="text" placeholder="Search" onKeyUp={(e)=>{SearchFunc(e, params)}}/> 
    </searchBarStyles.SearchBar>
}