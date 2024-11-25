import { useGetAPI } from "api/index.js";
import { loadingStyle, shopStyles } from "styles";
import { ViewItems } from "./subComponents/index";

export function ListAllItems({url}) {
  
  const {data, isLoading, isError} = useGetAPI(url);

    if (isLoading) {
      return <loadingStyle.Loader />;
    }
        
    if (isError) {
      return <div>Error loading data</div>;
    }

    return <shopStyles.ShopWrapper>
      <h2>Shop:</h2>
      <shopStyles.SearchInp type="text"/> 
        <ViewItems data={data} />
    </shopStyles.ShopWrapper>
}