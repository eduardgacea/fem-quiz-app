import { nextQuestion, selectOption, submitOption } from "../../slices/gameSlice";
import { DESKTOP_BREAKPOINT, TABLET_BREAKPOINT } from "../../config/config";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../../types/gameTypes";
import { RootState } from "../../redux/store";

import Option from "../../ui/Option";
import Button from "../../ui/Button";
import Error from "../../ui/Error";

import styled from "styled-components";

const IndexToLetterMap = new Map([
    [0, "A"],
    [1, "B"],
    [2, "C"],
    [3, "D"],
    [4, "E"],
    [5, "F"],
]);

const OptionsListWrapper = styled.div`
    @media screen and (min-width: ${DESKTOP_BREAKPOINT}px) {
        flex-grow: 1;
    }
`;

const StyledOptionsList = styled.ol`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0;
    margin: 0 0 0.75rem 0;

    @media screen and (min-width: ${TABLET_BREAKPOINT}px) {
        gap: 1.5rem;
        margin: 0 0 2rem 0;
    }
`;

function OptionsList() {
    const currentQuestionIndex = useSelector((state: RootState) => state.game.currentQuestionIndex)!;
    const status = useSelector((state: RootState) => state.game.status);
    const quiz = useSelector((state: RootState) => state.game.quiz);
    const errorMessage = useSelector((state: RootState) => state.game.errorMessage);
    const options = quiz.questions[currentQuestionIndex].options;

    const dispatch = useDispatch();
    const handleSelectOption = (option: string) => {
        if (status === Status.Submitting) return;
        dispatch(selectOption(option));
    };
    const handleSubmit = () => dispatch(submitOption());
    const handleNextQuestion = () => dispatch(nextQuestion());

    return (
        <OptionsListWrapper>
            <StyledOptionsList>
                {options.map((option, index) => (
                    <Option
                        key={index}
                        type="option"
                        icon={IndexToLetterMap.get(index)!}
                        onClick={() => handleSelectOption(option)}
                    >
                        {option}
                    </Option>
                ))}
            </StyledOptionsList>
            {status === Status.Active && <Button onClick={handleSubmit}>Submit Answer</Button>}
            {status === Status.Submitting && <Button onClick={handleNextQuestion}>Next Question</Button>}
            {errorMessage.length > 0 && <Error />}
        </OptionsListWrapper>
    );
}

export default OptionsList;
