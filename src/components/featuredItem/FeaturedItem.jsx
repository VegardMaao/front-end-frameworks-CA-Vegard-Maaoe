import { useGetAPI } from "api/index.js";
import { DataToComponent } from "./subComponents/dataToComponent";

export function FeaturedItem({url}){

    const {data, isLoading, isError} = useGetAPI(url);

    if (isLoading) {
      return <div>Loading post</div>;
    }

    if (isError) {
      return <div>Error loading data</div>;
    }

    return <DataToComponent data={data} />
};