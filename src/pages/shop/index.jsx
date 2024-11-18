import { Route, Routes } from "react-router-dom";
import Shop from "./shop";
import SingleItem from "./singleItem/singleItem";
import CheckOut from "./checkout/checkout";


export function ShopRouter() {
    return (
    <Routes>
        <Route path="/" element={<Shop/>} />
        <Route path=":id" element={<SingleItem />} />
        <Route path="CheckOut" element={<CheckOut />} />
    </Routes>
    )
}