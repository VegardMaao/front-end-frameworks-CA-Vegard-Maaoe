import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/index.jsx";
import * as navLinks from "./pages/index.js"

function App() {
  return (
    <div>
      <HelmetProvider>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<navLinks.Home />} />
            <Route path="contact" element={<navLinks.Contact />} />
            <Route path="shop" element={<navLinks.Shop />}/>
            <Route path="singleItem" element={<navLinks.SingleItem />} />
          </Route>
        </Routes>
      </HelmetProvider>
    </div>
  );
}



export default App;
