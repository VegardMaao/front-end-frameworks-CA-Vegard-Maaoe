import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Layout from "./components/index.jsx";
import * as navLinks from "./pages/index.js"

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<navLinks.Home />} />
          <Route path="products" element={<navLinks.Products />} />
          <Route path="contact" element={<navLinks.Contact />} />
          <Route path="posts" element={<navLinks.Shop />}/>
          <Route path="singleItem" element={<navLinks.SingleItem />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
