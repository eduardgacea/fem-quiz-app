import { TABLET_BREAKPOINT } from "../config/config";
import { Theme } from "../types/themeTypes";
import { Status } from "../types/gameTypes";
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
    $highlightCorrect: boolean;
    $highlightWrong: boolean;
};

type IconContainerProps = {
    $theme: Theme;
    $backgroundColor: string | undefined;
    $type: OptionType;
    $isSelected: boolean;
    $highlightCorrect: boolean;
    $highlightWrong: boolean;
};

const MainContainer = styled.li<MainContainerProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.75rem;
    cursor: pointer;

    background-color: ${props => {
        if (props.$isTransparent) return "transparent";
        else return props.$theme === "light" ? "var(--clr-lt-700)" : "var(--clr-dt-600)";
    }};

    padding: ${props => (props.$isTransparent ? "0" : "0.75rem")};

    box-shadow: ${props => {
        if (props.$isTransparent) return "none";
        return props.$isSelected ? "inset 0 0 0 3px var(--clr-accent), var(--shadow)" : "var(--shadow)";
    }};

    ${props => props.$highlightCorrect && "box-shadow: inset 0 0 0 3px var(--clr-correct), var(--shadow)"};
    ${props => props.$highlightWrong && "box-shadow: inset 0 0 0 3px var(--clr-wrong), var(--shadow)"};

    h2 {
        font: var(--f-mobile-option);
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    }

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        border-radius: 1.5rem;

        h2 {
            font: var(--f-tablet-option);
        }
    }
`;

const ContentWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
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
    border-radius: 0.375rem;

    background-color: ${props => (props.$backgroundColor ? props.$backgroundColor : "var(--clr-lt-600)")};
    ${props => props.$isSelected && "background-color: var(--clr-accent)"};
    ${props => props.$highlightCorrect && "background-color: var(--clr-correct)"};
    ${props => props.$highlightWrong && "background-color: var(--clr-wrong)"};

    color: ${props => (props.$type === "subject" ? "" : "var(--clr-dt-700)")};
    ${props => props.$isSelected && "color: var(--clr-white)"};

    & > img {
        width: var(--i-size-mobile);
    }

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        & {
            width: 56px;
            height: 56px;
            min-width: 56px;
            min-height: 56px;
            border-radius: 0.75rem;
            font: var(--f-tablet-option-icon);
        }

        & > img {
            width: var(--i-size-tablet);
        }
    }
`;

function Option({ children, type, icon, isTransparent = false, onClick }: OptionProps) {
    const theme = useSelector((state: RootState) => state.theme.value);
    const selectedOption = useSelector((state: RootState) => state.game.selectedOption);
    const status = useSelector((state: RootState) => state.game.status);
    const answer = useSelector(
        (state: RootState) => state.game.quiz.questions[state.game.currentQuestionIndex]?.answer
    );

    const backgroundColor = type === "subject" ? `var(--clr-${children.toLowerCase()})` : undefined;

    const isCorrect = children === answer;
    const isSelected = selectedOption === children;

    const showSuccessIcon = isCorrect && status === Status.Submitting;

    const highlightCorrect = isCorrect && isSelected && status === Status.Submitting;
    const highlightWrong = !isCorrect && isSelected && status === Status.Submitting;

    return (
        <MainContainer
            $theme={theme}
            $isTransparent={isTransparent}
            $isSelected={isSelected}
            $highlightCorrect={highlightCorrect}
            $highlightWrong={highlightWrong}
            onClick={onClick}
            as={isTransparent ? "div" : "li"}
        >
            <ContentWrapper>
                <IconContainer
                    $theme={theme}
                    $backgroundColor={backgroundColor}
                    $type={type}
                    $isSelected={isSelected}
                    $highlightCorrect={highlightCorrect}
                    $highlightWrong={highlightWrong}
                >
                    {type === "subject" ? <img src={icon} alt="quiz name" /> : icon}
                </IconContainer>
                <h2>{children}</h2>
            </ContentWrapper>
            {showSuccessIcon && (
                <div>
                    <img src="icon-correct.svg" alt="correct answer" />
                </div>
            )}
            {highlightWrong && (
                <div>
                    <img src="icon-incorrect.svg" alt="wrong answer" />
                </div>
            )}
        </MainContainer>
    );
}

export default Option;
