import { useState } from "react";
import { useGetAPI } from "api/index.js";
import { loadingStyle, shopStyles } from "styles";
import { ViewItems, Searchbar, SortInp } from "./subComponents/index";

export function ListAllItems({url}) {
  const {data, isLoading, isError} = useGetAPI(url);
  const [dataArray, setDataArray] = useState([]);
  let originalArray = data || [];


    if (isLoading) {
      return <loadingStyle.Loader />;
    }
        
    if (isError) {
      return <div>Error loading data</div>;
    }

    return <shopStyles.ShopWrapper>
      <h2>Shop:</h2>
        <shopStyles.SearchAndSort>
          <Searchbar originalArray={originalArray} newData={dataArray} setDataArray={setDataArray}/>
          <SortInp data={dataArray} setDataArray={setDataArray}/>
        </shopStyles.SearchAndSort>
        <ViewItems originalArray={originalArray} newData={dataArray} setDataArray={setDataArray}/>
    </shopStyles.ShopWrapper>
}