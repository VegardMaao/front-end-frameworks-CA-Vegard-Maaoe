import React, { createContext, useContext, useReducer, useEffect, useState } from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
// import * as S from "./App.styles.js";
import Layout from "./components/index.jsx";
import {Home, Products, Contact} from "./pages/index.js"

function App() {
  return (
    <div>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  );
}



export default App;
