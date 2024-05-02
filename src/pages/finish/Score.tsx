import { useDispatch, useSelector } from "react-redux";
import { newGame } from "../../slices/gameSlice";
import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";

import Button from "../../ui/Button";
import Option from "../../ui/Option";

import styled from "styled-components";

type ScoreCardProps = {
    $theme: Theme;
};

const ScoreCardWrapper = styled.div`
    margin-top: 2.5rem;
`;

const StyledScore = styled.div``;

const ScoreCard = styled.div<ScoreCardProps>`
    &,
    & ${StyledScore} {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
    }

    margin-bottom: 0.75rem;
    background-color: ${props => (props.$theme === "light" ? "var(--clr-lt-700)" : "var(--clr-dt-600)")};
    padding: 2rem;
    border-radius: 0.75rem;

    & ${StyledScore} :first-child {
        font: var(--f-score);
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    }

    & ${StyledScore} :last-child {
        font: var(--f-mobile-body-regular);
        color: ${props => (props.$theme === "light" ? "var(--clr-dt-700)" : "var(--clr-lt-300)")};
    }
`;

function Score() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const currentQuiz = useSelector((state: RootState) => state.game.quiz);
    const score = useSelector((state: RootState) => state.game.score);
    const quizLength = currentQuiz.questions.length;

    const dispatch = useDispatch();
    const handleNewGame = () => dispatch(newGame());

    return (
        <ScoreCardWrapper>
            <ScoreCard $theme={theme}>
                <Option type="subject" icon={`icon-${currentQuiz.title.toLowerCase()}.svg`} isTransparent={true}>
                    {currentQuiz.title}
                </Option>
                <StyledScore>
                    <span>{score}</span>
                    <span>out of {quizLength}</span>
                </StyledScore>
            </ScoreCard>
            <Button onClick={handleNewGame}>Play Again</Button>
        </ScoreCardWrapper>
    );
}

export default Score;
