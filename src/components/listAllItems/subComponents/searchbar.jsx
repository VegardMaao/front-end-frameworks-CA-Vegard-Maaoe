import { searchBarStyles } from "styles";
import { LogInp } from "./searchFunc";

export function Searchbar(data){
    return <searchBarStyles.SearchBar>
    <i className="fa-solid fa-magnifying-glass"></i>
    <searchBarStyles.SearchInp type="text" placeholder="Search" onKeyUp={(e)=>{LogInp(e, data)}}/> 
    </searchBarStyles.SearchBar>
}