import { RootState } from "../../redux/store";
import { useSelector } from "react-redux";

import Option from "../../ui/Option";
import Button from "../../ui/Button";

import styled from "styled-components";

const IndexToLetterMap = new Map([
    [0, "A"],
    [1, "B"],
    [2, "C"],
    [3, "D"],
    [4, "E"],
    [5, "F"],
]);

const StyledOptionsList = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0;
    margin: 0 0 0.75rem 0;
`;

function OptionsList() {
    const quiz = useSelector((state: RootState) => state.game.quiz);
    const currentQuestionIndex = useSelector((state: RootState) => state.game.currentQuestionIndex)!;

    const options = quiz.questions[currentQuestionIndex].options;

    return (
        <div>
            <StyledOptionsList>
                {options.map((option, index) => (
                    <Option key={index} type="option" icon={IndexToLetterMap.get(index)!}>
                        {option}
                    </Option>
                ))}
            </StyledOptionsList>
            <Button>Submit Answer</Button>
        </div>
    );
}

export default OptionsList;
