import {  Link } from "react-router-dom";

function Nav() {
    return (
      <nav>
        <>
        <i class="fa-solid fa-house"/>
        </>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
        </ul>
      </nav>
    )
  }
  

export default function Header() {
    return (
      <header>
        <div>Header with Logo and nav</div>
        <Nav />
      </header>
    )
  }