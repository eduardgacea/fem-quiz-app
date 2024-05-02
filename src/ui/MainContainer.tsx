import { parseCustomStyle } from "../utils/parseCustomStyle";
import { Device } from "../types/deviceTypes";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";
import React from "react";
import { TABLET_BREAKPOINT } from "../config/config";

type MainContainerProps = {
    children: React.ReactNode;
    style?: React.CSSProperties;
};

type StyledMainContainerProps = {
    $device: Device;
    $style?: string;
};

const StyledMainContainer = styled.div<StyledMainContainerProps>`
    padding: 2rem 1.5rem 1rem 1.5rem;
    height: 100dvh;
    max-width: 640px;
    margin: 0 auto;

    ${props => props.$device === Device.Mobile && props.$style}

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        max-width: 640px;
        padding: 2rem 0 1rem 0;
    }
`;

function MainContainer({ children, style }: MainContainerProps) {
    const device = useSelector((state: RootState) => state.device.value);

    return (
        <StyledMainContainer $device={device} $style={parseCustomStyle(style)}>
            {children}
        </StyledMainContainer>
    );
}

export default MainContainer;
