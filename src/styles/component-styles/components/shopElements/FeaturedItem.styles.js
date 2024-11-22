import styled from "styled-components";
import { theme } from "../../../theme";
import { device } from "../../../BreakPoints";



export const FeaturedItemWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat center/100% url(${(props) => props.url});
    height: 50vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media${device.sm}{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat center url(${(props) => props.url});
    }
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