import { Theme } from "../types/themeTypes";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type OptionProps = {
    children: string;
    type: "subject" | "answer";
    icon?: string;
};

type IconContainerProps = {
    $backgroundColor: string;
};

type MainContainerProps = {
    $theme: Theme;
};

const MainContainer = styled.li<MainContainerProps>`
    display: flex;
    align-items: center;
    background-color: ${props => (props.$theme === "light" ? "var(--clr-white)" : "var(--clr-dt-600)")};
    gap: 1rem;
    padding: 0.75rem;
    border-radius: 0.75rem;
    box-shadow: ${props => (props.$theme === "light" ? "var(--lt-shadow)" : "var(--dt-shadow)")};

    h2 {
        font: var(--f-body-m);
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    }
`;

const IconContainer = styled.div<IconContainerProps>`
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${props => props.$backgroundColor};
    border-radius: 0.375rem;

    & > img {
        width: var(--i-size);
    }
`;

function Option({ children, type, icon }: OptionProps) {
    const theme = useSelector((state: RootState) => state.theme.value);
    const backgroundColor = `var(--clr-${children.toLowerCase()})`;

    return (
        <MainContainer $theme={theme}>
            <IconContainer $backgroundColor={backgroundColor}>
                {type === "subject" ? <img src={icon} alt="quiz name" /> : icon}
            </IconContainer>
            <h2>{children}</h2>
        </MainContainer>
    );
}

export default Option;
