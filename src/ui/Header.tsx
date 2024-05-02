import { RootState } from "../redux/store";
import { useSelector } from "react-redux";

import ThemeToggle from "./ThemeToggle";
import Option from "./Option";

import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    margin-bottom: 2rem;
`;

function Header() {
    const currentQuiz = useSelector((state: RootState) => state.game.quiz);

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
