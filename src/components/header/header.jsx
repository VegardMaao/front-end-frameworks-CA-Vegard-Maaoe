import { useState } from "react";
import {  Link, useLocation } from "react-router-dom";
import { headerLinks } from "../../dataObjects/headerLinks";
import * as S from "../../styles/index";

function Nav() {

  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  const {pathname} = location;

    return (
      <S.headerStyles.NavbarWrapper>
        <Link className="logoWrapper" to={"/"}><S.Logo/></Link>
        <S.headerStyles.styledHamburgerIcon onClick={() => setShowMenu(!showMenu)} dangerouslySetInnerHTML={{__html: '<i class="fa-solid fa-bars"></i>'}}></S.headerStyles.styledHamburgerIcon>
        <S.headerStyles.NavLinkWrapper showOnMobile={showMenu}>
          {headerLinks.map((link) => (
            <S.headerStyles.StyledNavLink className={pathname === link.title ? "active" : ""} key={link.title} to={link.href}>{link.title}</S.headerStyles.StyledNavLink>
          ))}
        </S.headerStyles.NavLinkWrapper>
      </S.headerStyles.NavbarWrapper>
    )
  }

export default function Header() {
    return <header><Nav/></header>
  }