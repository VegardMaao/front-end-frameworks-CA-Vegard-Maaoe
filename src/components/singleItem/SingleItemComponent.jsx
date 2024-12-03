import { useGetAPI } from "api";
import { loadingStyle } from "styles";
import { singleItemStyles } from "styles";
import { DisplayPrice } from "../featuredItem/subComponents/displayPrice";
import { buttons } from "styles";

export function DisplaySingleItem(params) {

    const {itemURL, setTitle, setDescription} = params;

    const {data, isLoading, isError} = useGetAPI(itemURL);

    let itemData = data || [];

    if (isLoading) {
        return <loadingStyle.Loader />;
      }
          
      if (isError) {
        return <div>Error loading data</div>;
      }

      const {description, discountedPrice, id, image, price, rating, reviews, title } = itemData;
      const {url, alt} = image || {};

      setTitle(title);
      setDescription(description);

    return <singleItemStyles.SingleItemWrapper>
        <singleItemStyles.SingleItemImage src={url} alt={alt} />
        <singleItemStyles.SingleItemHeading>{title}</singleItemStyles.SingleItemHeading>
        <singleItemStyles.SingleIemParagraph>{description}</singleItemStyles.SingleIemParagraph>
        <DisplayPrice color="deepblue" discountedPrice={discountedPrice} regularPrice={price}/>

        <buttons.ButtonComponent colors="primary" size="big">Buy now</buttons.ButtonComponent>


    </singleItemStyles.SingleItemWrapper>
}
