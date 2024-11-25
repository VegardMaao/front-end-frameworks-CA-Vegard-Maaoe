import { searchBarStyles } from "styles";

export function Searchbar(){
    return <searchBarStyles.SearchBar>
    <i class="fa-solid fa-magnifying-glass"></i>
    <searchBarStyles.SearchInp type="text" placeholder="Search"/> 
    </searchBarStyles.SearchBar>
}