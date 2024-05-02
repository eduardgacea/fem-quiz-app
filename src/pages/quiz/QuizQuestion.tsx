import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";
import { TABLET_BREAKPOINT } from "../../config/config";

type QuestionProps = {
    $theme: Theme;
};

const Question = styled.h1<QuestionProps>`
    font: var(--f-mobile-question);
    color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    margin: 0.75rem 0 1.5rem 0;

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        font: var(--f-heading-m-medium);
        margin: 1.625rem 0 2.5rem 0;
    }
`;

function QuizQuestion() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const currentQuiz = useSelector((state: RootState) => state.game.quiz)!;
    const currentQuestionIndex = useSelector((state: RootState) => state.game.currentQuestionIndex)!;

    const question = currentQuiz.questions[currentQuestionIndex].question;

    return <Question $theme={theme}>{question}</Question>;
}

export default QuizQuestion;
