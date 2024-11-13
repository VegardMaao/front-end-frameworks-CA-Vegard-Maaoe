import {  Link } from "react-router-dom";
import * as S from "../../styles/index"

function Nav() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/"><i class="fa-solid fa-house"/></Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/checkout"><i class="fa-solid fa-cart-shopping"></i></Link>
          </li>
        </ul>
      </nav>
    )
  }


  

  // const navItems = [
  //   { 
  //     id: 1,
  //     title: `<i class="fa-solid fa-house"/>`,
  //     linkTo: `/`
  //   }, {
  //     id: 2,
  //     title: `Contact`,
  //     linkTo: `/contact`
  //   }, {
  //     id: 3,
  //     title: `Shop`,
  //     linkTo: `/shop`
  //   }, {
  //     id: 4,
  //     title: `<i class="fa-solid fa-cart-shopping">`,
  //     linkTo: `/checkout`
  //   }
  // ];
  
  // function Nav(navArr) {
  //     return <nav>
  //         {navArr.map((item) => (
  //         <Link key={item.id} to={`${item.linkTo}`}>
  //           {`${item.title}`}
  //         </Link>
  //       ))}
  //       </nav>
  //   }
  

export default function Header() {
    return (
      <S.StyledHeader>
        <Nav />
      </S.StyledHeader>
    )
  }