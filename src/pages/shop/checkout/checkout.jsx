import {Metadata} from "components";
import { CheckoutComponent } from "components/checkout/CheckoutComponent";

export default function CheckOut() {
    return <main>
      <Metadata title="Checkout" description="Check out here"/>
      <h1>Checkout</h1>
      <CheckoutComponent />
      </main>
  }