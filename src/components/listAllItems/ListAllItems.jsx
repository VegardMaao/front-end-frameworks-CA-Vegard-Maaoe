import { useState } from "react";
import { useGetAPI } from "api/index.js";
import { loadingStyle, shopStyles } from "styles";
import { ViewItems, Searchbar } from "./subComponents/index";

export function ListAllItems({url}) {
  const [dataArray, setDataArray] = useState([]);
  
  const {data, isLoading, isError} = useGetAPI(url);

  let itemsArray = data || [];

    if (isLoading) {
      return <loadingStyle.Loader />;
    }
        
    if (isError) {
      return <div>Error loading data</div>;
    }

    return <shopStyles.ShopWrapper>
      <h2>Shop:</h2>
        <Searchbar data={itemsArray} setDataArray={setDataArray} dataArray={dataArray}/>
        <ViewItems data={dataArray} />
    </shopStyles.ShopWrapper>
}