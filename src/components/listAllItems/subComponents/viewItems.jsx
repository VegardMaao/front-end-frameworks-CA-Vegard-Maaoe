import { Link } from "react-router-dom";
import { buttons, shopStyles } from "styles";
import { DisplayPrice } from "../../featuredItem/subComponents/displayPrice";
import { useEffect } from "react";

export function ViewItems(params){
  const {originalArray, output, setOutput, setSortedArray} = params;

  useEffect(()=>{
    setOutput(originalArray);
    setSortedArray(originalArray);
  },[])

      return <shopStyles.AllItemDiv>
        {output.map((item) => (
          <shopStyles.ShopItem key={item.id}>
            <Link to={`shop/${item.id}`}>
              <shopStyles.Thumbnail src={item.image.url} alt={item.image.alt}/>
            </Link>
            <shopStyles.ItemTitle>{item.title}</shopStyles.ItemTitle>
            <shopStyles.ItemDescription>{item.description}</shopStyles.ItemDescription>
            <DisplayPrice color="deepblue" discountedPrice={item.discountedPrice} regularPrice={item.price}/>
            <Link to={`shop/${item.id}`}>
                <buttons.ButtonComponent colors="inverted" size="small">See product</buttons.ButtonComponent>
            </Link>
          </shopStyles.ShopItem>
      ))}
      </shopStyles.AllItemDiv>
}