import { searchBarStyles } from "styles";
import { LogInp } from "./searchFunc";

export function Searchbar(){
    return <searchBarStyles.SearchBar>
    <i className="fa-solid fa-magnifying-glass"></i>
    <searchBarStyles.SearchInp type="text" placeholder="Search" onKeyUp={LogInp}/> 
    </searchBarStyles.SearchBar>
}