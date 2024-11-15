import { footerText, footerIcons } from "../../dataObjects/footerContent";
import * as S from "../../styles/index";



function FooterText(content) {
  const arr = content.content;
  return <S.footerStyles.FooterContentWrapper direction="column">
    {arr.map((link) => (
            <S.footerStyles.TextLink key={link.title} to={link.link} target={link.target}>{link.title}</S.footerStyles.TextLink>
          ))}
    </S.footerStyles.FooterContentWrapper>
}

function FooterIcons(content) {
  const arr = content.content;
  console.log(arr);
  return <S.footerStyles.FooterContentWrapper direction="row">
    {arr.map((link) => (
            <S.footerStyles.IconLink key={link.title} to={link.link} target={link.target} dangerouslySetInnerHTML={{__html:link.title}}></S.footerStyles.IconLink>
          ))}
  </S.footerStyles.FooterContentWrapper>
}

export default function Footer() {
    return <S.footerStyles.FooterWrapper>
      <FooterText content={footerText}/>
      <FooterIcons content={footerIcons}/>
    </S.footerStyles.FooterWrapper>
  }
  
