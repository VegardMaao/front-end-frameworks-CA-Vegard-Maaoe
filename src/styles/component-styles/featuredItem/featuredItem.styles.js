import styled from "styled-components";
import { device } from "../../BreakPoints";
import { theme } from "../../theme";

export const FeaturedItemWrapper = styled.div`
    background-image: url(${(props) => props.url}});
`;