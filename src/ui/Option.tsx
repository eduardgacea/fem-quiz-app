import { Theme } from "../types/themeTypes";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type OptionType = "subject" | "option";

type OptionProps = {
    children: string;
    type: OptionType;
    icon: string;
    isTransparent?: boolean;
    onClick?: (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
};

type MainContainerProps = {
    $theme: Theme;
    $isTransparent: boolean;
    $isSelected: boolean;
};

type IconContainerProps = {
    $theme: Theme;
    $backgroundColor: string | undefined;
    $type: OptionType;
    $isSelected: boolean;
};

const MainContainer = styled.li<MainContainerProps>`
    display: flex;
    align-items: center;
    gap: 1rem;
    border-radius: 0.75rem;
    cursor: pointer;

    background-color: ${props => {
        if (props.$isTransparent) return "transparent";
        else return props.$theme === "light" ? "var(--clr-white)" : "var(--clr-dt-600)";
    }};

    padding: ${props => (props.$isTransparent ? "0" : "0.75rem")};

    box-shadow: ${props => {
        if (props.$isTransparent) return "none";
        if (props.$theme === "light") {
            return props.$isSelected ? "inset 0 0 0 3px var(--clr-accent), var(--lt-shadow)" : "var(--lt-shadow)";
        } else {
            return props.$isSelected ? "inset 0 0 0 3px var(--clr-accent), var(--dt-shadow)" : "var(--dt-shadow)";
        }
    }};

    h2 {
        font: var(--f-body-m);
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    }
`;

const IconContainer = styled.div<IconContainerProps>`
    width: 40px;
    height: 40px;
    min-width: 40px;
    min-height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font: var(--f-mobile-option-icon);
    background-color: ${props => (props.$backgroundColor ? props.$backgroundColor : "var(--clr-lt-600)")};
    ${props => props.$isSelected && "background-color: var(--clr-accent)"};
    color: ${props => (props.$type === "subject" ? "" : "var(--clr-dt-700)")};
    ${props => props.$isSelected && "color: var(--clr-white)"};
    border-radius: 0.375rem;

    & > img {
        width: var(--i-size);
    }
`;

function Option({ children, type, icon, isTransparent = false, onClick }: OptionProps) {
    const theme = useSelector((state: RootState) => state.theme.value);
    const selectedOption = useSelector((state: RootState) => state.game.selectedOption);

    const backgroundColor = type === "subject" ? `var(--clr-${children.toLowerCase()})` : undefined;

    const isSelected = selectedOption === children;

    return (
        <MainContainer
            $theme={theme}
            $isTransparent={isTransparent}
            $isSelected={isSelected}
            onClick={onClick}
            as={isTransparent ? "div" : "li"}
        >
            <IconContainer $theme={theme} $backgroundColor={backgroundColor} $type={type} $isSelected={isSelected}>
                {type === "subject" ? <img src={icon} alt="quiz name" /> : icon}
            </IconContainer>
            <h2>{children}</h2>
        </MainContainer>
    );
}

export default Option;
