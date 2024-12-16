import styled from "styled-components";
import { theme } from "../../../theme";
import { device } from "../../../BreakPoints";



export const FeaturedItemWrapper = styled.div`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat center/100% url(${(props) => props.url});
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media${device.sm}{
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), no-repeat center url(${(props) => props.url});
    height: 75vh;
    }
}
`;

export const FeaturedInfoDiv = styled.div`
    height: 50%;
    display: flex;
    flex-direction: column;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: space-between;
    `;

export const FeaturedHeader = styled.h1`
    margin: 0px;
    color: ${({colors}) => fontColors[colors]};
`;

export const FeaturedParagraph = styled.p`
    color: ${({colors}) => fontColors[colors]};
    text-align: center;
    font-size: 1.1rem;
    max-width: 80vw;
`;

export const LineThrough = styled.span`
    text-decoration: line-through;
`;

export const ButtonBox = styled.div`
    width: 70%;
    max-width: 350px;
    display: flex;
    justify-content: space-around;
`;

const fontColors = {
    white: theme.color.white,
    deepblue: theme.color.deepblue
}