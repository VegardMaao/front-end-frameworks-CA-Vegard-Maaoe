import { useGetAPI } from "api/index.js";
import { DataToComponent } from "./subComponents/dataToComponent";
import { loadingStyle } from "styles";

export function FeaturedItem({url}){

    const {data, isLoading, isError} = useGetAPI(url);

    if (isLoading) {
      return <loadingStyle.Loader />;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }

    return <DataToComponent data={data} />
};