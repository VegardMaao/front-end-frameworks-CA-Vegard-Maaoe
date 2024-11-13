import {  Link, useLocation } from "react-router-dom";
import * as S from "../../styles/index";

function Nav() {
  
  const links = [{
    title: "Home",
    href: "/"
  }, {
    title: "Contact",
    href: "/contact"
  },{
    title: "Shop",
    href: "/shop"
  },{
    title: "Cart",
    href: "/checkout"
  }]

  const location = useLocation();
  const {pathname} = location;

    return (
      <S.NavbarWrapper>
        <Link className="logoWrapper" to={"/"}><S.Logo/></Link>
        <S.NavLinkWrapper>
          {links.map((link) => (
            <S.StyledNavLink className={pathname == link.title ? "active" : ""} key={link.title} to={link.href}>{link.title}</S.StyledNavLink>
          ))}
        </S.NavLinkWrapper>
      </S.NavbarWrapper>
    )
  }

export default function Header() {
    return <header><Nav/></header>
  }