import { quizzes } from "../data/data.json";
import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import ThemeToggle from "./ThemeToggle";
import Option from "./Option";

import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
`;

function Header() {
    const currentQuizId = useSelector((state: RootState) => state.game.currentQuizId);
    const currentQuiz = quizzes.find(quiz => quiz.id === currentQuizId)!;

    console.log(currentQuiz);

    return (
        <StyledHeader>
            <Option type="subject" icon={`icon-${currentQuiz.title.toLowerCase()}.svg`} isTransparent={true}>
                {currentQuiz.title}
            </Option>
            <ThemeToggle />
        </StyledHeader>
    );
}

export default Header;
