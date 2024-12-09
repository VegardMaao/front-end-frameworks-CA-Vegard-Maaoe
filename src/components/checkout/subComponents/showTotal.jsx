import { checkoutStyles } from "styles";

export function ShowTotal({getTotalPrice}) {
    return <checkoutStyles.SumOfProducts>Total is {getTotalPrice()}</checkoutStyles.SumOfProducts>
}