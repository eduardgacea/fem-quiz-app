import { Theme } from "../../types/themeTypes";
import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import styled from "styled-components";

type CountProps = {
    $theme: Theme;
};

const Count = styled.p<CountProps>`
    font: var(--f-mobile-heading-m-regular-italic);
    color: ${props => (props.$theme === "light" ? "var(--clr-dt-700)" : "var(--clr-lt-300)")};
`;

function QuestionCount() {
    const theme = useSelector((state: RootState) => state.theme.value);
    const quizLength = useSelector((state: RootState) => state.game.quiz.questions.length);
    const currentQuestionNumber = useSelector((state: RootState) => state.game.currentQuestionIndex)! + 1;

    return (
        <Count $theme={theme}>
            Question {currentQuestionNumber} of {quizLength}
        </Count>
    );
}

export default QuestionCount;
