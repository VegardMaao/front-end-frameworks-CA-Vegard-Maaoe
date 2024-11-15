import { Route, Routes } from "react-router-dom";
import {Layout} from "components";
import Home from "./home/home";
import Contact from "./contact/contact";
import {ShopRouter} from "./shop";;

export const PageRouter =  () => {
    return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop/*" element={<ShopRouter />}/>
      </Route>
    </Routes>
  )
}