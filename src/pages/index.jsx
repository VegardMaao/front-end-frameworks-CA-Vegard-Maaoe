import Home from "./home/home";
import Contact from "./contact/contact";
import Shop from "./shop/shop";
import SingleItem from "./shop/singleItem/singleItem";
import CheckOut from "./checkout/checkout";
import { Route, Routes } from "react-router-dom";
import Layout from "../components/index";

export {Home, Contact, Shop, SingleItem, CheckOut};

export const PageRouter =  () => {
    return <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="contact" element={<Contact />} />
              <Route path="shop" element={<Shop />}/>
              <Route path="singleItem" element={<SingleItem />} />
              <Route path="checkout" element={<CheckOut/>} />
            </Route>
          </Routes>
}