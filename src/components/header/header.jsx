import {  Link } from "react-router-dom";
import * as S from "../../styles/index"

function Nav() {
    return (
      <nav>
        <>
        
        </>
        <ul>
          <li>
            <Link to="/"><i className="fa-solid fa-house"/></Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/checkout"><i className="fa-solid fa-cart-shopping"></i></Link>
          </li>
        </ul>
      </nav>
    )
  }
  

export default function Header() {
    return (
      <S.StyledHeader>
        <Nav />
      </S.StyledHeader>
    )
  }