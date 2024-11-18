import { Route, Routes } from "react-router-dom";
import {Layout} from "components";
import Contact from "./contact/contact";
import {ShopRouter} from "./shop";
import About from "./about/about";

export const PageRouter =  () => {
    return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ShopRouter />} />
        <Route path="shop/*" element= {<ShopRouter/>} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />}/>
      </Route>
    </Routes>
  )
}