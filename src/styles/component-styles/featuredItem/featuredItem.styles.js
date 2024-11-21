import styled from "styled-components";
import { theme } from "../../theme";



export const FeaturedItemWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat center/100% url(${(props) => props.url});
    height: 40vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
`;

export const FeaturedHeader = styled.h1`
    margin: 0px;
    color: ${theme.color.white};
`;

export const FeaturedParagraph = styled.p`
    color: ${theme.color.white};
    text-align: center;
    font-size: 1.1rem;
    max-width: 80vw;
`;

export const LineThrough = styled.span`
    text-decoration: line-through;
`;