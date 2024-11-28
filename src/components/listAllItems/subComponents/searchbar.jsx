import { searchBarStyles } from "styles";
import { LogInp } from "./searchFunc";

export function Searchbar(params){
    // console.log(params.data);
    // params.setDataArray("hello")
    // console.log(params.dataArray);
    return <searchBarStyles.SearchBar>
    <i className="fa-solid fa-magnifying-glass"></i>
    <searchBarStyles.SearchInp type="text" placeholder="Search" onKeyUp={(e)=>{LogInp(e, params)}}/> 
    </searchBarStyles.SearchBar>
}