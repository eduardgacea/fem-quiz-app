import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type QuestionProps = {
    $theme: Theme;
};

const Question = styled.h1<QuestionProps>`
    font: var(--f-mobile-question);
    color: ${props => (props.$theme === "light" ? "var(--clr-dt-300)" : "var(--clr-lt-700)")};
    margin-top: 0.75rem;
`;

function QuizQuestion() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const currentQuiz = useSelector((state: RootState) => state.game.quiz)!;
    const currentQuestionIndex = useSelector((state: RootState) => state.game.currentQuestionIndex)!;

    const question = currentQuiz.questions[currentQuestionIndex].question;

    return <Question $theme={theme}>{question}</Question>;
}

export default QuizQuestion;
