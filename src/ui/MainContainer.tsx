import { parseCustomStyle } from "../utils/parseCustomStyle";

import styled from "styled-components";
import React from "react";

type MainContainerProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
};

type StyledMainContainerProps = {
    $style?: string;
};

const StyledMainContainer = styled.div<StyledMainContainerProps>`
    padding: 2rem 1.5rem 1rem 1.5rem;
    height: 100dvh;

    ${props => props.$style}
`;

function MainContainer({ children, style }: MainContainerProps) {
    return <StyledMainContainer $style={parseCustomStyle(style)}>{children}</StyledMainContainer>;
}

export default MainContainer;
