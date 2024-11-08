import { Outlet } from "react-router-dom"
import Header from "./header/header";
import Footer from "./footer/footer";


  // The <Outlet> from react-router-dom displays any child routes, almost like
  // passing through "children" in a component
  export default function Layout() {
    return (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    )
  }