import { useState } from "react";
import {  Link } from "react-router-dom";
import { headerLinks } from "dataObjects/headerLinks";
import {headerStyles} from "styles";
import { Logo } from "./Logo";

function Nav() {

  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(true); 

    return (
      <headerStyles.NavbarWrapper>
        <Link className="logoWrapper" to={"/"}><Logo/></Link>
        {/* <headerStyles.CartIcon to="/shop/checkout" showCart={showCart} dangerouslySetInnerHTML={{__html: `<i class="fa-solid fa-cart-shopping"></i>`}}/>  */}
        <headerStyles.StyledHamburgerIcon onClick={() => setShowMenu(!showMenu)} dangerouslySetInnerHTML={{__html: '<i class="fa-solid fa-bars"></i>'}}></headerStyles.StyledHamburgerIcon>
        <headerStyles.NavLinkWrapper showOnMobile={showMenu}>
          {headerLinks.map((link) => (
            <headerStyles.StyledNavLink activeClassName="active" key={link.title} to={link.href} >{link.title}</headerStyles.StyledNavLink>
          ))}
        </headerStyles.NavLinkWrapper>
        <headerStyles.CartIcon to="/shop/checkout" showCart={showCart} dangerouslySetInnerHTML={{__html: `<i class="fa-solid fa-cart-shopping"></i>`}}/> 
      </headerStyles.NavbarWrapper>
    )
  }

export default function Header() {
    return <header><Nav/></header>
  }