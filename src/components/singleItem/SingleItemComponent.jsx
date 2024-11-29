import { useGetAPI } from "api";
import { loadingStyle } from "styles";
import { singleItemStyles } from "styles";
import { DisplayPrice } from "../featuredItem/subComponents/displayPrice";
import { buttons } from "styles";

export function DisplaySingleItem({itemURL}) {
    
    const {data, isLoading, isError} = useGetAPI(itemURL);

    let itemData = data || [];

    if (isLoading) {
        return <loadingStyle.Loader />;
      }
          
      if (isError) {
        return <div>Error loading data</div>;
      }

      console.log(itemData)

      const {description, discountedPrice, id, image, price, rating, reviews, title } = itemData;
      const {url, alt} = image || {};

    return <singleItemStyles.SingleItemWrapper>
        <singleItemStyles.SingleItemImage src={url} alt={alt} />
        <singleItemStyles.SingleItemHeading>{title}</singleItemStyles.SingleItemHeading>
        <singleItemStyles.SingleIemParagraph>{description}</singleItemStyles.SingleIemParagraph>
        <DisplayPrice discountedPrice={discountedPrice} regularPrice={price}/>

        <buttons.ButtonComponent colors="primary" size="big">Buy now</buttons.ButtonComponent>


    </singleItemStyles.SingleItemWrapper>
}
